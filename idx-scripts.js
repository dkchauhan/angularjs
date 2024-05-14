// Version 2.1
getQuery=function(e){for(var n,r="[?&]"+e+"(?:\\[\\])?=([^&#]+)",o=new RegExp(r,"g"),t=[];null!==

(n=o.exec(decodeURIComponent(window.location.search)));)n&&t.push(n[1]);return t.length?t:!1};

Number.prototype.formatMoney=function(t,a,e){var s=this,t=isNaN(t=Math.abs(t))?2:t,a=void 

0==a?".":a,e=void 0==e?",":e,r=0>s?"-":"",o=parseInt(s=Math.abs(+s||0).toFixed(t))+"",i=(i=o.length)

>3?i%3:0;return r+(i?o.substr(0,i)+e:"")+o.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+e)+(t?a+Math.abs

(s-o).toFixed(t).slice(2):"")};

jQuery.fn.ignore=function(n){return this.clone().find(n).remove().end()};
if(readCookie('IDX-userData')) {
	//var lead = JSON.parse(decodeURIComponent(readCookie('IDX-userData')));
	//jQuery('.lead-name').text(lead.leadName.replace(/\+/, ' '));
	jQuery('.non-user').hide();
	//jQuery('.logged-user').show();
}
function nf(n) {
	var ranges = [{ divider: 1e6 , suffix: 'M' },{ divider: 1e3 , suffix: 'k' }];
	for (var i = 0; i < ranges.length; i++) {
		if (n >= ranges[i].divider) {
	    	return (n / ranges[i].divider).toString() + ranges[i].suffix;
		}
	}
	return n.toString();
}
function fup(e){return void 0===e?"":e.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"")}
var pins;
jQuery(document).ready(function($) {
      /*// Add Property Type to right-sidebar at idx pages
    	var i = setInterval(function () {
        if ( $('.community-sidebar').length ) {
		  clearInterval(i);
		  // safe to execute your code here
            var ptText = $("input[name=pt]").val();
            ptText = $('select[name="pt"] option[value='+ptText+']').text();

      $('.community-sidebar h4').before('<h4>'+ptText+'</h4>');
      console.log( $("input[name=pt]").val() );
		  
        }
       }, 100);
    */
    if ( jQuery('#IDX-main.IDX-category-details').length ) { jQuery('.home-qs').hide(); } // REMOVE SEARCH TOOL FROM IDX PROPERTY DETAILS PAGE
    
    // Add STUDIO word to studio properties 
    if ( $('.IDX-resultsField-bedrooms').length < 1 ) $('.IDX-resultsBaths').before('<style>.IDX-resultsField-bedrooms:after {content: "STUDIO";}</style><div class="IDX-resultsField-bedrooms"></div>');
	if(typeof L !== "undefined") {
		pins = L.featureGroup();
		var hoverIcon = L.icon({
		    iconUrl: theme_data.dir + '/images/map-house.png',
		    iconSize: [44, 46],
		  });
		var myIcon = L.icon({
		    iconUrl: theme_data.dir + '/images/map-house_small.png',
		    iconSize: [35, 37],
		  });
		if(typeof pinGroup !== 'undefined') {
			pinGroup.eachLayer(function(l) {
			  l.setIcon(myIcon);
			  l.addTo(pins);
			});
			pins.on('mouseover', function(l) {
				l.layer.setIcon(hoverIcon)
			});
			pins.on('mouseout', function(l) {
				l.layer.setIcon(myIcon);
			});
		}
		if (map) map.invalidateSize();
    //console.log( Object.keys(pins.getBounds()).length );
		if ( Object.keys(pins.getBounds()).length > 0 ) map.fitBounds(pins.getBounds());
	}
});
if(jQuery('.IDX-category-results').length) {
   
	var aa = location.href, ab = aa.split('?'), ac = jQuery.deparam(fup(ab[1])), ad = jQuery.deparam(fup(ab[1]));
	var mapB = '<div class="result-count"><a href="#" class="map-switch map-tab">SEE FULL MAP</a></div>';
	var sortLinks = jQuery('<div class="sort-links"></div>'), qp = jQuery('<div class="query-params"><div class="wrap"></div></div>'), links = '';
	var cities = {"a261": {"_18094":'Glen Ridge', "_18096":'Glen Rock', "_21416": 'Ho Ho Kus', "_27980":'Mahwah', "_30887": 'Montclair', "_33256": 'North Caldwell', "_35393": 'Paramus', "_38391": 'Ramsey', "_39367": 'Ridgewood', "_40629": 'Rutherford'}, "b120": {"_21440":'Hoboken',"_53738":'JC, Downtown',"_50452":'Weehawken',"_33230":'North Bergen' , "_13887": "Edgewater", "_47427":'Union City', "_50987": "West New York", "_9213": "Cliffside Park", "_16571": "Fort Lee"}};
	var searchForm = jQuery('#homeqs-content-1');

    //searchForm.find('.form-field.ac select').trigger('update.fs');

    /*var refineFields = ['city','lp','hp', 'bd', 'tb', 'sqft', 'pt'];
    for(var i in ac) {
    	if(refineFields.indexOf(i) > -1) {
	    	if(i == 'city') jQuery('[name^=city]').val(ac[i][0]);
	    	else jQuery('[name='+i+']').val(ac[i]);
	    	switch(i) {
	    		case city: jQuery('[name^=city]').val(ac[i][0]);
	    	}
    	}
    }*/
    jQuery('input[type=text],select', searchForm).each(function() {
    	var t = jQuery(this), n = t.attr('name').replace('[]','');
    	if(ac[n] != undefined) {
	    	if(t[0].nodeName.toLowerCase() == 'select') {
	    		var v = typeof ac[n] == 'array' ? ac[n][0] : ac[n];
	    		if(t.find('[value="'+v+'"]').length) t.val(v).trigger('update.fs');
	    	} else {
	    		t.val(ac[n]);
	    	}
	    }
    });
	/*jQuery('.sort-links #53738').insertBefore( jQuery('.sort-links #50452') ); // CHANGE TABS ORDERING
    
	qp.find('.wrap').append(jQuery('#IDX-saveSearch').addClass('star'));
	if(getQuery('lp') && getQuery('hp') ) 
		qp.find('.wrap').append('<span>'+nf(ac.lp)+' - '+nf(ac.hp)+'</span>');
	else {
		if(getQuery('lp')) qp.find('.wrap').append('<span>'+nf(ac.lp)+'</span>');
		if(getQuery('hp')) qp.find('.wrap').append('<span>'+nf(ac.hp)+'</span>');
	}
	if((city = getQuery('city')))
		for(var i in city) {
			qp.find('.wrap').append('<span>'+theme_data.ref.city[city[i]]+'</span>');
		}
	qp.find('.wrap').append('<span class="results-count">RESULTS <span>| <span class="apnd-count">'+jQuery('#IDX-resultsCountWrap span').text()+'</span> LISTINGS</span></span>');
	*/

	jQuery('.IDX-resultsCell').each(function() {
	    var url = jQuery('.IDX-resultsPhotoLink', this).attr('href');
	    if (jQuery(this).data('lat'))
	        var links = '<div class="pseudo-links"><a class="pseudo-link" href="' + url + '">Full Listing</a><a class="pseudo-link map-link" href="#IDX-resultMap">See in Map</a></div>';
	    jQuery('.IDX-resultsContentTop', this).after(links);
	    jQuery('.IDX-resultsField-price', this).appendTo(jQuery('.IDX-resultsContentMain', this));
	});
	jQuery('#IDX-resultMap').prepend('<button class="map-tab map-close"><i class="fa fa-times"></i></button>');
	jQuery('.map-link').click(function(e) {
	    //e.preventDefault();
	    var par = jQuery(this).parents('.IDX-resultsCell');
	    var lat = par.data('lat');
	    var lng = par.data('lng');
	    var latlng = L.latLng(lat, lng);

	    map.setView(latlng, 15);
	});

	jQuery('.widget_price_ranges').appendTo('.idx-result-sidebar').wrap('<div />');
	jQuery('#IDX-resultsContent').prepend('<div class="wqhe"><select class="customSort"><option value="prd">Price High to Low</option><option value="pra">Price Low to High</option></select></div>');
	jQuery('#IDX-resultsPagerTop').prependTo('.wqhe');
	jQuery('#IDX-resultsCountWrap span').prependTo('.wqhe');
	jQuery('.customSort').change(function() {
		ac.srt = jQuery(this).val();
		location.href=ab[0]+'?'+jQuery.param(ac);
	});
	if((sort = getQuery('srt'))) jQuery('.customSort').val(sort);
	//qp.insertBefore('.site-inner');
	jQuery('.map-tab').click(function() {
		var body = jQuery('body');
		if(body.hasClass('full-map')) {
			body.removeClass('full-map');
			jQuery('#IDX-resultMap').removeAttr('style');
		}
		else {
			body.addClass('full-map');
			jQuery('#IDX-resultMap').height(jQuery(window).height() - jQuery('#IDX-resultMap').offset().top);
		}
		map.invalidateSize();
		map.fitBounds(pins.getBounds());
	});
	jQuery(document).ready(function() {
		var pageInfo = JSON.parse(jQuery('#IDX-pageInfoGet').text()),
			dCity = pageInfo.city === Array ? pageInfo.city[0]:pageInfo.city;
		var propertyTypes = {
			'1': 'Sales',
			'6': 'Rental',
			'2': 'Multi-Family',
			'3': 'Vacant Land',
			'5': 'Condo',
			"sfr":"Sales","mfr":"Multi-Family","rnt":"Rental","com":"Commercial","ld":"Lots/Land"
		}
		var brWrapper = jQuery('<div class="community-sidebar"><h4></h4><h3></h3><div class="community-ranges"></div></div>');
		var brItemHtml = '<a class="community-range"><span class="cr-count"><span></span>LISTINGS</span><label></label><span class="cr-price">$</span></a>';
		var resultLink = 'http://homes.hobokenNJ.com/idx/results/listings?';

		cities = cities.a261["_"+dCity] != undefined ? cities.a261 : cities.b120;
		
		for(var i in cities) {
			var j = i.replace('_','');
			if(dCity == j) {
				links += '<span id="'+j+'" class="this">'+cities[i]+'</span>';
				jQuery('.IDX-pagination a').each(function() {
					var a = jQuery(this), h = a.attr('href');
					a.attr('href', h+'&city[]='+j);
				});
			} else {
				ad.city = [j];
				links+= '<a id="'+j+'" href="'+ab[0]+'?'+jQuery.param(ad)+'">'+cities[i]+'</a>';
			}
		}
		sortLinks.append(links).insertBefore('#IDX-resultsContent').after(searchForm);
		jQuery('#IDX-resultMap').wrap('<div class="idx-result-sidebar" />');
	
		jQuery('.idx-result-sidebar').insertAfter(searchForm).append(mapB);

		if(Object.keys(theme_data.ref.city).length) {
			var brCity = theme_data.ref.city[dCity];
			if(typeof pageInfo.city !== 'undefined' && typeof pageInfo.pt !== 'undefined') {
				pageInfo = {city: pageInfo.city, pt: pageInfo.pt};
				jQuery.ajax({
					url: 'http://hobokennj.com/wp-admin/admin-ajax.php',
					method: 'POST',
					dataType: 'json',
					data: {
						action: 'get_beds',
						url: resultLink+jQuery.param(pageInfo)
					},
					success: function(d) {
	          if ( propertyTypes[pageInfo.pt] == "Rental" ) {
							brWrapper.children('h4').text(propertyTypes[pageInfo.pt]+' Price Ranges in').siblings('h3').text(brCity);  //Adds text before Price Ranges In
	          } else {
	          	brWrapper.children('h4').text('Sales Price Ranges in').siblings('h3').text(brCity);  
	      		}
	            if (propertyTypes[pageInfo.pt] == 'Sales') { 
	            	brWrapper.children('h4').before('<h4>Single Family Homes</h4>');
	            } else {
	            	brWrapper.children('h4').before('<h4>'+propertyTypes[pageInfo.pt]+' Homes</h4>');
	            }
	            
						for(var i in d) {
							var brItem = jQuery(brItemHtml);
							var brPrice = d[i].lp == d[i].hp ? parseInt(d[i].lp).formatMoney(0):parseInt(d[i].lp).formatMoney(0)+' - '+parseInt(d[i].hp).formatMoney(0);
							var brBeds = d[i].beds?d[i].beds+'BEDROOMS':'STUDIO';

							brItem.attr('href', d[i].url).children('label').text(brBeds).siblings('.cr-price').append(brPrice).siblings('.cr-count').children('span').text(d[i].count);
							brWrapper.find('.community-ranges').append(brItem);
						}
						jQuery('.idx-result-sidebar').append(brWrapper);
					}
				}).done(function() {
					jQuery.ajax({
				    	url: 'http://hobokennj.com/wp-admin/admin-ajax.php',
				    	type: 'POST',
				    	data: {
				    		action: 'buildings',
				    		city: brCity
				    	},
				    	success: function(d,t,j) {
				    		if(j.status == 200) {
				    			var json = JSON.parse(d), wrapper = jQuery('<div class="IDXresultsfeaturedBuildings"><h3>Featured Buildings:</h3><div/></div>'), container = wrapper.find('div');
				    			for(var i in json) {
				    				var item = '<div class="fbItem"><a href="'+ json[i].url +'" class="fbImage"><img src="'+ json[i].image + '"/></a><a href="'+ json[i].url +'" class="fbAddress">' + json[i].title + ', '+ json[i].city +'</a><div class="fbCount"><a href="'+ json[i].url +'">'+ json[i].sales +' ACTIVE SALES</a> <br /><a href="'+json[i].url+'?pt=rnt">'+ json[i].rentals +' ACTIVE RENTALS</a></div></div>';
				    				container.append(item);
				    			}
				    			wrapper.append('<a href="http://hobokennj.com/new-construction/">VIEW FEATURED BUILDINGS</a>');
				    			jQuery('.idx-result-sidebar').append(wrapper);
				    		}
				    	}
				    });
				});
			}
		}
	});
}

if(jQuery('.IDX-category-details').length) {
	var header = jQuery('<div class="listing-title"><h1><span></h1></div>');
	var maparea = jQuery('<div class="main-details"> <div class="map"></div><div class="prop-detail"> <div class="pd-left"> <span class="prop-item bd"> <span>Beds</span> </span> <span class="prop-item tb"> <span>Baths</span> </span> <span class="prop-item sqft"> <span>SQFT</span></span> <span class="price prop-item"></span> </div><div class="pd-right"> <div class="details-id"> </div><div class="sched"><a href="#IDX-detailsContactForm">Schedule a Showing</div></div></div></div>');
	var gallery = jQuery('<ul id="lightGallery"></ul>');
    jQuery('.st_sharethis').insertBefore('#IDX-detailsLinkSave');

    jQuery('.site-header').after(header);
    jQuery('.listing-title h1').prepend(jQuery('#IDX-detailsField-address').ignore('.IDX-detailsField-label').text());
    jQuery('#IDX-galleryLeft').after(maparea);
    jQuery('#IDX-detailsMap').appendTo('.map');

    jQuery('.IDX-detailsShowcaseImage').each(function() {
        var src = jQuery(this).attr('src');
        gallery.append('<li data-thumb="' + src + '"><a href="' + src + '" rel="lightbox[gallery]">' + jQuery(this)[0].outerHTML + '</a></li>');
    });
    gallery.appendTo('#IDX-galleryLeft');
    jQuery("#lightGallery").lightSlider({
        item: 1,
        gallery: true,
        thumbItem: 5,
        adaptiveHeight: true
    });
    jQuery('.prop-item.price').text(jQuery('#IDX-detailsPrice').text());
    var bd = jQuery('#IDX-detailsField-bedrooms').ignore('.IDX-detailsField-label').text();
    var tb = jQuery('#IDX-detailsField-totalBaths').ignore('.IDX-detailsField-label').text();
    var city = jQuery('#IDX-detailsField-cityName').ignore('.IDX-detailsField-label').text().trim();
    var state = jQuery('#IDX-detailsField-state').ignore('.IDX-detailsField-label').text();
    var sqft = jQuery('#IDX-detailsField-sqFt').ignore('.IDX-detailsField-label').text();
    var listingid = jQuery('#IDX-detailsField-listingID').ignore('.IDX-detailsField-label').text().trim(),
    schedule = 'http://homes.hobokennj.com/idx/scheduleshowing/a999/'+listingid;

    //jQuery('.sched a').attr('href', schedule);
    jQuery('.listing-title span').text(city + ', ' + state);
    jQuery('.prop-item.bd').prepend(bd);
    jQuery('.prop-item.tb').prepend(tb);
    if(!sqft) jQuery('.prop-item.sqft').remove();
   	else jQuery('.prop-item.sqft').prepend(sqft);
    jQuery('.details-id').append(jQuery('#IDX-detailsField-propStatus, #IDX-field-availableDate'));
    var before = jQuery('#IDX-detailsContactForm').prev();
    jQuery('#IDX-detailsContactForm').after(before);
    jQuery('.IDX-showcaseBreak').remove();

    jQuery("#IDX-propertyRemarks").prependTo('#IDX-fieldsWrapper').addClass('IDX-fieldContainer');
    jQuery('#IDX-propertyRemarks').prepend('<h3>Property Description</h3>');
    jQuery('#IDX-fieldsWrapper [id^=IDX-detailsContainer]:first .IDX-fieldContainerListLeft').append(jQuery('#IDX-detailsField-bedrooms, #IDX-detailsField-fullBaths, #IDX-detailsField-partialBaths'));
    
    jQuery('.IDX-fieldContainer.IDX-fieldTwoColumn').each(function() {
        var items = jQuery(this).find('.IDX-fieldContainerList > div');
        var half = Math.ceil(parseInt(items.length / 2));
        items.slice(0, half).appendTo(jQuery(this).find('.IDX-fieldContainerListLeft'));
        items.slice(half, items.length).appendTo(jQuery(this).find('.IDX-fieldContainerListRight'));
    });

    jQuery(document).ajaxComplete(function() {
    	if(jQuery('.idxSl-container .IDX-resultsCell').length && !jQuery('.idxSl-container .bx-wrapper').length) {
    		jQuery('.idxSl-container .IDX-resultsCell').wrapAll('<div class="idxSl-wrapper" />');
    		jQuery('.idxSl-wrapper').bxSlider({
    			slideWidth: 216,
				minSlides: 1,
				maxSlides: 8,
				pager: false,
				slideMargin: 10
    		});
    	}
    	if(jQuery('.inl_listings .IDX-resultsCell').length && !jQuery('.inl_listings .bx-wrapper').length) {
    		jQuery('.inl_listings').bxSlider({
    			slideWidth: 216,
				minSlides: 1,
				maxSlides: 8,
				pager: false,
				slideMargin: 10
    		});
    	}
    });
    jQuery.ajax({
    	url: 'http://hobokennj.com/wp-admin/admin-ajax.php',
    	type: 'POST',
    	data: {
    		action: 'buildings',
    		city: jQuery('#IDX-detailsField-cityName').ignore('span').text().trim()
    	},
    	success: function(d,t,j) {
    		if(j.status == 200) {
    			var json = JSON.parse(d), wrapper = jQuery('<div class="IDXfeaturedBuildings"><h3>Featured Buildings:</h3><div/></div>'), container = wrapper.find('div');
    			for(var i in json) {
    				var item = '<div class="fbItem"><a href="'+ json[i].url +'" class="fbImage"><img src="'+ json[i].image + '"/></a><a href="'+ json[i].url +'" class="fbAddress">' + json[i].title + '<br />'+ json[i].city +'</a><div class="fbCount">'+ json[i].sales +' ACTIVE SALES <br />'+ json[i].rentals +' ACTIVE RENTALS</div></div>';
    				container.append(item);
    			}
    			jQuery('#IDX-detailsContactForm').before(wrapper);
    			container.bxSlider({
	    			slideWidth: 216,
					minSlides: 1,
					maxSlides: 8,
					pager: false,
					slideMargin: 10
	    		});
    		}
    	}
    })
}