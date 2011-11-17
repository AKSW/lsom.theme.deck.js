/*
 * Deck.js Theme
 * for Leipzig School of Media
 *
 * @author Michael Haschke, http://michael.haschke.biz/
 * @author Sebastian Tramp, http://sebastian.tramp.name
 */

$(document).bind('deck.beforeInit', function(){
    var author     = $('meta[name=author]').attr('content');
    var webid      = $("meta[name='dcterms.creator']").attr('content');
    var authorLink = '<a href="' + webid + '">' + author + ' | ' + webid + '</a>';
    var date       = $("meta[name='dcterms.date']").attr('content');

    $('.deck-meta-author').html(authorLink);
    $('.deck-meta-date').html(date);
    $('.deck-meta-title').html($('title').text());

    $(document).bind('deck.change', function(event, from, to) {
        var currenttitle = $.deck('getSlide', to).find('h2').text();
        $('.title-from-current-deck').html(currenttitle);
    });
});
