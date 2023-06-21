# IMPORTACOES COMUNS
from flask import Flask, jsonify, request
# from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import re

app = Flask('__main__')
app.debug = True

def encontrar_n_ocorrencia(string, padrao, n):
    ocorrencias_encontradas = 0
    indice = -1
    
    if n == 0:
                return string.index(padrao)

    while ocorrencias_encontradas < n:
        try:
            indice = string.index(padrao, indice + 1)
            ocorrencias_encontradas += 1
        except ValueError:
            # Se não houver mais ocorrências, retorna -1
            return -1

    return indice



@app.route('/', methods=['GET'])
def index():

    retorno = {}
    # dados = request.get_json()
    idLivro = '1068'

    link = f'https://editora34.com.br/detalhe.asp?id={idLivro}&busca='
    resultado = requests.get(link).text
    
    buscas = [("txtAutor", 0, 'span'), ("txtAutor2", 2, 'p'), ("textoHome", 1, 'div')]
    
    for busca in buscas:

        padrao1 = f'<{busca[2]} class="{busca[0]}">'
        print(padrao1)
        padrao2 = f'</{busca[2]}>'
        print(padrao2)
        
        conteudo = resultado
        indexInit = encontrar_n_ocorrencia(conteudo, padrao1, busca[1]) + len(padrao1)
        print(indexInit)
        print(indexInit)
        conteudo = conteudo[indexInit:]
        
        indexEnd = conteudo.index(padrao2)
        info = conteudo[:indexEnd]
        
        retorno[busca[0]] = info
        
    padrao1 = r'<div class="txt">(\d{1,3}) p.'
    padrao2 = r'[^0-9]'
    
    num_pag = re.findall(padrao1, resultado)
    retorno['pags'] = num_pag[0]
    
        
    print(retorno)
    
    return jsonify(retorno)

app.run()