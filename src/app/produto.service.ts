import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 private url = "http://localhost:3000/produto"

  constructor(private _httpclient: HttpClient) { }

  getproduto(id:any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`;
    return this._httpclient.get<Produto>(urlAtualizar);
  }

  getprodutos():Observable<Produto[]> {
    return this._httpclient.get<Produto[]>(this.url)
  }

  cadastrarproduto (produto:Produto[]) :Observable<Produto[]>{
    return this._httpclient.post<Produto[]>(this.url, produto)

  }

  atualizarproduto(id:any, produto: Produto): Observable<Produto[]>{
     const urlAtualizar = `${this.url}/${id}`;
     return this._httpclient.put<Produto[]>(urlAtualizar, produto)
  }

  removerproduto(id: any): Observable<Produto[]>{
    const urldeletar = `${this.url}/${id}`;
    return this._httpclient.delete<Produto[]>(urldeletar);
  }
}