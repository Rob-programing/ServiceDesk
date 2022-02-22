import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

const dados = [{
  id: 1,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Mão de Orba SGZ',
  falha: 'Falha ao criar a mão de obra',
  ambiente: 'Produção',
  status: 'Novo',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 2,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Ordem de Serviço SGZ',
  ambiente: 'Homologação',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 3,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Centro de Inicio',
  ambiente: 'Produção',
  status: 'Pendente',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 4,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Aplicativos Anywhere (SGZ Usina)',
  ambiente: 'Produção',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 5,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Aplicativos Anywhere (SGZ Arbo)',
  ambiente: 'Homologação',
  status: 'Novo',
  prioridade: 'Baixa',
  data: new Date().toLocaleString("en-US")
}, {
  id: 6,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Aplicativos Anywhere (SGZ Mobile)',
  ambiente: 'Produção',
  status: 'Pendente',
  prioridade: 'Alta',
  data: new Date().toLocaleString("en-US")
}, {
  id: 7,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Usuarios SGZ',
  ambiente: 'Produção',
  status: 'Aguardando Resposta',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 8,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Controle de Massa Asfáltica',
  ambiente: 'Homologação',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 9,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Ativos Arboreos',
  ambiente: 'Produção',
  status: 'Em andamento',
  prioridade: 'Baixa',
  data: new Date().toLocaleString("en-US")
}, {
  id: 10,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Itens de OS SGZ',
  ambiente: 'Homologação',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 11,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Locais SGZ',
  ambiente: 'Produção',
  status: 'Em andamento',
  prioridade: 'Alta',
  data: new Date().toLocaleString("en-US")
}, {
  id: 12,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Contratos SGZ',
  ambiente: 'Homologação',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}, {
  id: 13,
  solicitante: 'Teste Solicitante',
  cliente: 'testeCliente',
  categoria: 'Ativos SGZ',
  ambiente: 'Homologação',
  status: 'Em andamento',
  prioridade: 'Media',
  data: new Date().toLocaleString("en-US")
}];


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-analista-chamados',
  templateUrl: './analista-chamados.component.html',
  styleUrls: ['./analista-chamados.component.css']
})
export class AnalistaChamadosComponent implements AfterViewInit, OnInit {
  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns = ['id', 'solicitante', 'cliente', 'categoria', 'solicitacoes', 'ambiente', 'status', 'prioridade', 'data'];
  dataSource!: MatTableDataSource<any>;
  length = 100;
  pageSizes = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
