














var aFeketeLista = [ "szemetArpi", "aljasJoska", "albiAGangszta", "faszosLajos", "tolvajFeri" ];



//          1. Add to the end of an Array ( avagy adjal hozza meg egy frajert a fekete listahoz )

aFeketeLista.push( "zsivanyCigany" );

console.log( aFeketeLista, "Bekerult egy kispalyas a lista vegere" );




//          1.1 funkcioban

function TegyelMegEgyFrajertAListaba() {

    aFeketeLista.push( "zsivanyCigany" );

    console.log( aFeketeLista )
}

TegyelMegEgyFrajertAListaba();





//           2. Remove from the end of an Array ( avagy, vegyel ki egy frajert a fekete listabol )


aFeketeLista.pop ( "albiAGangszta" );

console.log( aFeketeLista, "Kivettunk egy kicsi frajert a lista vegerol" );





//          3. Remove from the front of an Array ( szedjel ki egy frajert a lista elejerol )

aFeketeLista.shift();

console.log( aFeketeLista, "Kivettunk egy fo frajert a Fekete Listarol" );





            // 4. Add to the front of an Array ( tegyel be egy masik frajert a lista elejere )

aFeketeLista.unshift( "tzeparSzabi", "boxosGyuri" );

console.log( aFeketeLista, "Bekerult a fo Lamer a lista elejere" );





            //5. Find the index of an item in the Array ( talaljuk meg a boszki indexet )

console.log( aFeketeLista.indexOf( "tolvajFeri" ) + "-os"+" "+"Indexen Van a Frajer a Fekete Listan" );





            //6. Remove an item by Index Position ( tudod mar a dumat.. )

aFeketeLista.splice( 2 , 1 );

console.log( aFeketeLista, "Kivettuk a harmadik balfaszt a listabol" );





            //7. Remove items from an Index Position

aFeketeLista.splice( 2, 2 );

console.log( aFeketeLista, "Kivettuk a harmadik es a nagyedik balfaszt" );





            //8. Copy an Array

var masolatAFeketelistarol = aFeketeLista.slice();

console.log( masolatAFeketelistarol,  "Masolat az elso Fekete listarol" );




//            9. Copy within

aFeketeLista.copyWithin( 1, 3 );

console.log( aFeketeLista );




//            10. fill               ????????????  Hogy hosszabbitom meg az arrayt ????

masolatAFeketelistarol.fill( 0, 2, 9 );

console.log( masolatAFeketelistarol );




//            11. reverse

masolatAFeketelistarol.reverse();

console.log( masolatAFeketelistarol );




//            12. sort - az elso betu szerint abc-sorrendbe teszi a stringeket egy arrayben.

console.log( aFeketeLista.sort() );




//            13. concat

var harmadmikFeketelista = aFeketeLista.concat( masolatAFeketelistarol );

console.log( harmadmikFeketelista );




//            14. includes

console.log( aFeketeLista.includes( "tzeparSzabi" ));




//            15.  join

console.log( harmadmikFeketelista.join() );




//             16. last index of

console.log( aFeketeLista.lastIndexOf( "tzeparSzabi" ), " -dik indexen van a geci!" );








