var times2020 =[
                {
                    clube:"Atlético-PR",
                    pts: 50,
                    jogos: 37,
                    vitorias: 14,
                    empates: 8,
                    derrotas: 15,
                    gp: 36,
                    gc: 36
                },
                {
                    clube:"Atlético-GO",
                    pts: 47,
                    jogos: 37,
                    vitorias: 11,
                    empates: 14,
                    derrotas: 12,
                    gp: 37,
                    gc: 44
                },
                {
                    clube:"Atlético-MG",
                    pts:65 ,
                    jogos: 37,
                    vitorias: 19,
                    empates: 8,
                    derrotas: 10,
                    gp: 60,
                    gc: 45
                },
                {
                    clube:"Bahia",
                    pts: 41,
                    jogos: 37,
                    vitorias: 11,
                    empates: 8,
                    derrotas: 18,
                    gp: 46,
                    gc: 59
                },
                {
                    clube:"Botafogo",
                    pts: 27,
                    jogos: 37,
                    vitorias: 5,
                    empates: 12,
                    derrotas: 20,
                    gp: 31,
                    gc: 60
                },
                {
                    clube:"Bragantino",
                    pts: 50,
                    jogos: 37,
                    vitorias: 12,
                    empates: 14,
                    derrotas: 11,
                    gp: 49,
                    gc: 40
                },
                {
                    clube:"Ceará",
                    pts: 49,
                    jogos: 37,
                    vitorias: 13,
                    empates: 10,
                    derrotas: 14,
                    gp: 52,
                    gc: 50
                },
                {
                    clube:"Corinthians",
                    pts: 50,
                    jogos: 37,
                    vitorias: 13,
                    empates: 11,
                    derrotas: 13,
                    gp: 45,
                    gc: 45
                },
                {
                    clube:"Coritiba",
                    pts: 31,
                    jogos: 37,
                    vitorias: 7,
                    empates: 10,
                    derrotas: 20,
                    gp: 30,
                    gc: 51
                },
                {
                    clube:"Flamengo",
                    pts: 71,
                    jogos: 37,
                    vitorias: 21,
                    empates: 8,
                    derrotas: 8,
                    gp: 67,
                    gc: 46
                },
                {
                    clube:"Fluminense",
                    pts: 61,
                    jogos: 37,
                    vitorias: 17,
                    empates: 10,
                    derrotas: 10,
                    gp: 53,
                    gc: 42
                },
                {
                    clube:"Fortaleza",
                    pts: 41,
                    jogos: 37,
                    vitorias: 10,
                    empates: 11,
                    derrotas: 16,
                    gp: 34,
                    gc: 42
                },
                {
                    clube:"Goiás",
                    pts: 37,
                    jogos: 37,
                    vitorias: 9,
                    empates: 10,
                    derrotas: 18,
                    gp: 39,
                    gc: 60
                },
                {
                    clube:"Grêmio",
                    pts: 59,
                    jogos: 37,
                    vitorias: 14,
                    empates: 17,
                    derrotas: 6,
                    gp: 53,
                    gc: 39
                },
                {
                    clube:"Internacional",
                    pts: 69,
                    jogos: 37,
                    vitorias: 20,
                    empates: 9,
                    derrotas: 8,
                    gp: 61,
                    gc: 35
                },
                {
                    clube:"Palmeiras",
                    pts: 58,
                    jogos: 37,
                    vitorias: 15,
                    empates: 13,
                    derrotas: 9,
                    gp: 51,
                    gc: 35
                },
                {
                    clube:"Santos",
                    pts: 54,
                    jogos: 37,
                    vitorias: 14,
                    empates: 12,
                    derrotas: 11,
                    gp: 52,
                    gc: 49
                },
                {
                    clube:"São Paulo",
                    pts: 63,
                    jogos: 37,
                    vitorias: 17,
                    empates: 12,
                    derrotas: 8,
                    gp: 57,
                    gc: 40
                },
                {
                    clube:"Sport",
                    pts: 42,
                    jogos: 37,
                    vitorias: 12,
                    empates: 6,
                    derrotas: 19,
                    gp: 31,
                    gc: 48
                },
                {
                    clube:"Vasco",
                    pts: 38,
                    jogos: 37,
                    vitorias: 9,
                    empates: 11,
                    derrotas: 17,
                    gp: 34,
                    gc: 54
                }
            ];

var tbody = document.querySelector('.tbody')
    for(let i = 0 ; i < times2020.length ; i++){
        let tr = document.createElement('tr');
            tbody.appendChild(tr);
    }
let tr = document.querySelectorAll('tr');
    for(let i = 0 ; tr.length ; i++){
        alert(times2020[i].1)
    }
