$(function() {
    //original/b4-discount items' prices
    var items = [];
    i = 0;
    //CURRENT/DISCOUNTED prices of discounted items
    var currentPrice = [];
    j = 0;
    //index values of each item
    var index = [];
    k = 0;
    
    $('span.a-price.a-text-price span.a-offscreen').each(function(){
        items[i++] = $(this).text();
        currentPrice[j++] = $(this).parent().prev('span.a-price').find('span.a-offscreen').text();
        index[k++] = $(this).parents('div[data-asin]').attr('data-asin');
    });
    console.log(items);
    console.log(currentPrice);
    console.log(index);

    
    
    /*
        item1 org. price = currentPrice[0];
        item1 cur. price = items[0];
        price different = items[0] - currentPrice[0];
    */

    //index of the top item
    var topItemIndex = document.querySelector('[data-index="2"]').getAttribute('data-index');
    
    console.log(topItemIndex);

    
    //way to reorder things
    //$('div[data-index="3"]').insertBefore('div[data-index="' + topItemIndex + '"]');
});
