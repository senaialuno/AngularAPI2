import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  public produto: Produto = new Produto(0, "", "", "", 0);
id: any;

  constructor(private _produtoService: ProdutoService, private route:Router) { }
  ngOnInit(): void {
  }
  cadastrar(){
    this._produtoService.cadastrarproduto(newFunction()).subscribe(
    produto => {
    this.produto = new Produto(0,"","","",0);
    alert("Cadastro Efetuado com Sucesso")
    },
    err => {
    alert("erro ao cadastrar")
    }
    );
    this.route.navigate(["/restrito/lista"]);

    function newFunction(this: any): Produto[] {
      return this.produto;
    }
    }
}