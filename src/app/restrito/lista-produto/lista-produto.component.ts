import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _ProdutoService: ProdutoService, private _router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  ngonInit(): void {
    this.listarProduto();
  }


  listarProduto(): void {
    this._ProdutoService.getprodutos().subscribe(
      retornaProduto => {
      this.produtos = retornaProduto.map(
        item => {
          return new Produto(
            item.id,
            item.produto,
            item.descricao,
            item.foto,
            item.preco
          );
        }
      )
    }
    )
  }

  excluir(id: number): void {
    this._ProdutoService.removerproduto(id).subscribe(
      produro => {
        this.listarProduto();
      },
      Err => { alert("Erro ao Excluir") }

    );
    // window.location.href = "/restrito/lista";
    this._router.navigate(["/restrito/lista"]);
  }
}