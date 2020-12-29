$(function() {
    $('#button').click(function(){
        console.log('button test');
    });
    //original/b4-discount items' prices
    var items = [];
    i = 0;
    //CURRENT/DISCOUNTED prices of discounted items
    var currentPrice = [];
    j = 0;
    //dataAsin(attribute) values of each item
    var dataAsin = [];
    k = 0;
    //price difference 
    var priceDiff = [];

    //list w/ no $ signs
    var intOrgPrice = [];
    var intDiscPrice = [];
    
    //getting values for items, currentPrice, index lists
    $('span.a-price.a-text-price span.a-offscreen').each(function(){
        items[i++] = $(this).text();
        currentPrice[j++] = $(this).parent().prev('span.a-price').find('span.a-offscreen').text();
        dataAsin[k++] = $(this).parents('div[data-asin]').attr('data-asin');
    });
    
    //getting rid of duplicate items
    /*
    seeing duplicates
    dataAsin.forEach((c, index) => {
        console.log(`${c} - ${index} - ${dataAsin.indexOf(c)}`);
    });
    */
    var indexOf = [];
    q = 0;
    dataAsin.forEach((c, index) => {
        indexOf[q++] = (`${dataAsin.indexOf(c)}`);
    });
    for (var i = 0; i < items.length; i++) {
        if (i != indexOf[i]) {
            dataAsin.splice(i, 1);
            items.splice(i, 1);
            currentPrice.splice(i, 1);
        }
    }

    /* (another way of getting rid of duplicates)
    Array.prototype.getDuplicates = function () {
        var duplicates = {};
        for (var i = 0; i < this.length; i++) {
            if(duplicates.hasOwnProperty(this[i])) {
                duplicates[this[i]].push(i);
            } else if (this.lastIndexOf(this[i]) !== i) {
                duplicates[this[i]] = [i];
            }
        }
    
        return duplicates;
    };
    var duplicates = dataAsin.getDuplicates();
    console.log(duplicates);
    */

    //getting price diff list
    for (var i = 0; i < items.length; i++) {
        priceDiff[i] = items[i] - currentPrice[i];
    }

    //getting rid of $ signs and gettig values for priceDiff[]
    for (var i = 0; i < items.length; i++) {
        intOrgPrice[i] = items[i].substring(1);
        intDiscPrice[i] = currentPrice[i].substring(1);
        priceDiff[i] = intOrgPrice[i] - intDiscPrice[i];
    }

    //reverse sorting priceDiff
    var sortedPriceDiff = [...priceDiff];
    var reverseSortedPriceDiff = [];

    sortedPriceDiff.sort(function(a, b) {
        return a - b;
    });
    
    reverseSortedPriceDiff = sortedPriceDiff.reverse();
 

    var l = (document.getElementsByClassName('sg-col-4-of-12')[1]);
    var firstDataAsinVal = l.getAttribute('data-asin');

    //moving all discounted items up
    for (var i = items.length - 1; i >= 0; i--) {
        $('div[data-asin="' + dataAsin[i] + '"]').insertBefore('div[data-asin="' + firstDataAsinVal + '"]');
    }
    
    //find correct index placements
    var moveIndexPos = [];
    z = 0;
    for (var i = 0; i < reverseSortedPriceDiff.length; i++) {
        moveIndexPos[z++] = reverseSortedPriceDiff.indexOf(priceDiff[i]);
    }

    
    /* (unsucessful lol)
    putting them according to moveIndexPos
    for (var i = 0; i < items.length; i++) {
        $('div[data-asin="' + dataAsin[i] + '"]').insertBefore('div[data-asin="' + dataAsin[(moveIndexPos[i]+1)] + '"]');
    }
    */
    
    /*
    for (var i = 0; i < items.length; i++) {
        if ()
    }
    */
});
/*
    TO-DO
        -add a button in chrome extension for the option to turn off/on the feature
        -add icons
*/