//html
// li *ngFor="let e of arrayFiltrato()"
////
arr:any[] = []
page = 0
elements_per_page = 10
// this.arrayFiltrato().length/this.elements_per_page //arrotondato per eccesso ci dice il numero di pagina massime
arrayFiltrato():any[]{
    let res = this.arr
    //solo attivi
    res = filtraAttivi(res)
    res = filtraPerUtente(res)
    res = searcharFilter(res)

    res = impagina(res)
    return res
}

filtraAttivi(a) {
    return a.filter((e)=>e.active)
}

searchFilter(a) {
    s = input.value
    return a.filter((e)=>e.nome.includes(s))
}

impagina(a) {
    return abstract.slice(this.page * this.elements_per_page, this.elements_per_page)
}



//COSE DA PROVARE
//ricerca e filtraggi dei dati + paginazione
