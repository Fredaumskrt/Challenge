from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json  

app = Flask(__name__)
CORS(app)

# Conectar ao banco de dados (ou criar se não existir)
def get_db_connection():
    conn = sqlite3.connect('policy.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    if conn is None:
        raise Exception("Não foi possível estabelecer conexão com o banco de dados")
    
    try:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS policies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nodes TEXT NOT NULL,
                edges TEXT NOT NULL
            )
        ''')
        conn.commit()
    except Exception as e:
        print(f"Erro ao criar tabela: {e}")
    finally:
        conn.close()

@app.route('/policy', methods=['POST'])
def save_policy():
    try:
        policy = request.json
        if not policy or 'nodes' not in policy or 'edges' not in policy:
            return jsonify({"error": "Invalid data: 'nodes' and 'edges' are required"}), 400

        nodes = policy['nodes']
        edges = policy['edges']

        conn = get_db_connection()
        conn.execute(
            #'INSERT INTO policies('nodes', 'edges') values????'
            'INSERT INTO policies (nodes, edges) VALUES (?, ?)',
            (json.dumps(nodes), json.dumps(edges))  
        )
        conn.commit()
        conn.close()

        return jsonify({"status": "Policy saved"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/policy', methods=['GET'])
def get_policy():
    try:
        conn = get_db_connection()
        policy = conn.execute('SELECT * FROM policies ORDER BY id DESC LIMIT 1').fetchone()
        conn.close()

        if policy:
            return jsonify({
                "nodes": json.loads(policy['nodes']),  
                "edges": json.loads(policy['edges'])   
            }), 200
        else:
            return jsonify({"error": "No policy found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)