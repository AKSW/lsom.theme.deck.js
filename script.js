/*
 * Deck.js Theme
 * for Leipzig School of Media
 *
 * @author Michael Haschke, http://michael.haschke.biz/
 *
 */

$(document).bind('deck.beforeInit', function(){

    $('.deck-meta-author').html($('meta[name=author]').attr('content'));
    $('.deck-meta-date').html($('meta[name=date]').attr('content'));
    $('.deck-meta-title').html($('title').text());
    
    $(document).bind('deck.change', function(event, from, to) {
        var currenttitle = $.deck('getSlide', to).find('h2').text();
        $('.title-from-current-deck').html(currenttitle);
    });
});
