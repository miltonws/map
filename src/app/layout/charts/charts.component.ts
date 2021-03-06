import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocationService } from 'src/app/service/location.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    public mesAtual: string;
    public helps: any[];
    public users: any[];
    public mes: any[];
    public qTAjudaMes: any[];
    public contConfirmado = 0;
    public contNaoConfirmado = 0;
    public contadorMenorIdade = 0;
    public contadorAdultoIdade = 0;
    public contadorTerceiraIdade = 0;
    public contadorTotalOcorrencia = 0;

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChartLabels: string[] = [
        '08',
    ];

    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [10, 59, 80, 81, 56, 55, 40], label: 'Confirmadas' },
        { data: [10, 48, 40, 19, 86, 27, 90], label: 'Não Confirmadas' }
    ];
//    public barChartData: any[] = [
//        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Atendidas' },
//        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Não Atendidades' }
//    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = [
        'Menores de 18',
        'Maiores de 18 e Menores de 50',
        'Maior de 50 anos'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string;

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(private location: LocationService) {}

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.radarChartType = 'radar';
        this.pieChartType = 'pie';
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.getLocationHelp();
        this.getUSers();
    }

    public getUSers() {
        this.location.getUsers().subscribe(
            users => {
                this.users = users;
                var i = 0;
                for(var keyHelp in this.helps){
                    var helpUSerId = this.helps[keyHelp].userDeviceId;
                    for(var keyUser in this.users){
                        var userID = this.users[keyUser]._id                     
                        if(helpUSerId === userID){
                            var date = new Date();
                            var dataNascimento = this.users[keyUser].dataNascimento;
                            var anoN = dataNascimento.substring(0, 4);
                            var idade = date.getFullYear() - anoN;
                            if(idade < 18){
                                this.contadorMenorIdade++;
                            }else if( idade >= 18 && idade <= 50){
                                this.contadorAdultoIdade++;
                            }else{
                                this.contadorTerceiraIdade++;
                            }
                        }
                    }
                }
                this.pieChartData[0] = this.contadorMenorIdade;
                this.pieChartData[1] = this.contadorAdultoIdade;
                this.pieChartData[2] = this.contadorTerceiraIdade;
            }
        )
    }

    public getLocationHelp() {
        this.location.getLocalization().subscribe(
            helps => {
                var i = 0;
                this.helps = helps
                this.helps.forEach(ajuda => {
                    this.mesAtual = ajuda.dataTimeHelp;
                    var mesf = this.mesAtual.substring(5, 7)
                    //var teste = this.mes.indexOf(mesf) === -1;
                    //console.log("teste: ", teste);
                    if(ajuda.snConfirma == ''){
                        this.contNaoConfirmado++;
                    }else{
                        this.contConfirmado++;
                    }
                });

                for (var key in this.barChartData) {
                    console.log("key " + key + " has value " + this.barChartData[key]); 
                    if(i == 0){
                        console.log("Quantidade confirmado: ", this.barChartData[key].data = [this.contConfirmado]);
                    }else{
                        console.log("Quantidade não confirmado: ", this.barChartData[key].data = [this.contNaoConfirmado]);
                    }
                    console.log(this.barChartData[key].label);
                    i++;
                }
               
                console.log("array mes: ", this.mes);
                console.log("S",this.contConfirmado);
                console.log("N",this.contNaoConfirmado);
                console.log(" ajuda :" ,helps);
            }
        )
    }
}
