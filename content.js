$(function() {
    //orginal prices of discounted items
    var items = [];
    i = 0;
    var currentPrice = [];
    j = 0;
    
    $('span.a-price.a-text-price span.a-offscreen').each(function(){
        items[i++] = $(this).text();
        currentPrice[j++] = $(this).parent().prev('span.a-price').find('span.a-offscreen').text();
    });
    console.log(items);

    //discounted/current price
    
    //$('span.a-price.a-text-price span.a-offscreen').('span.a-price span.a-offscreen').each(function(){
    //    currentPrice[j++] = $(this).text();
    //});
    //console.log(items);
    //var currentPrice = $("span.a-price.a-text-price").closest(":has(.a-offscreen)").find('.a-offscreen').text();
    console.log(currentPrice);

    //for (i = 0; i < items.length; i++) {
    //    console.log(items[i] + ": " + currentPrice[i])
    //    i++;
    //}
});

