/* 
* ===============================
* Image Property Custom Functions
* =============================== 
*/

jQuery(document).ready(function($) {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Turn the Footer into an accordion on mobile
    $(document).on('click', '.widget_nav_menu',  function(event) {
        $(this).toggleClass('expanded');
        if($(this).hasClass('expanded')) {
            $(this).animate({ height: $(this).get(0).scrollHeight }, 500 );
        } else {
            $(this).animate({ height: '60px' }, 500 );
        }
    });
     
 
    $(document).ready(() => {
        let url = location.href.replace(/\/$/, "");
       
        if (location.hash) {
          const hash = url.split("#");
          $('#myTab a[href="#'+hash[1]+'"]').tab("show");
          url = location.href.replace(/\/#/, "#");
          history.replaceState(null, null, url);
          setTimeout(() => {
            $(window).scrollTop(0);
          }, 400);
        } 
         
        $('a[data-toggle="tab"]').on("click", function() {
          let newUrl;
          const hash = $(this).attr("href");
          if(hash == "#home") {
            newUrl = url.split("#")[0];
          } else {
            newUrl = url.split("#")[0] + hash;
          }

          history.replaceState(null, null, newUrl);
        });
      });

    // Copy link of page to clipboard.
    $('#copy-to-clipboard').on('click tap', function() {
        var dummy = document.createElement('input'),
        text = window.location.href;
    
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Copied to clipboard');
    });
    
    
    // =======================================================================================================
    // =======================================================================================================
    // =======================================================================================================
    // // Display link to agent page in profile box.

    // What does this do??....
    // This activates on hover of the agent profile card.
    // Sets the styles for the popup button (sass broken atm).
    // Show the button and hide again when not hovering.
    // But only on Mobile
    // Also it blocks the initial href event if on mobile
    // Video play is hooked to onclick on element

    /// TODO
    // fix IOS video playback issue???

    // COULD PROBABLY REWRITE THIS - let sjust get it working first
    // have two functions set up doing similar thing
    // if mobile use the click event, is desktop use the mouseover event.

    
    function toggleClass(targetElement){
        userCard = document.getElementById(targetElement);

        if(userCard.classList.contains('active')){
            $(userCard).find('video').get(0).currentTime = 0;
            $(userCard).find('video').get(0).pause();
            $(userCard).removeClass('active');
        } else {
            $(userCard).find('video').get(0).play();
            $(userCard).addClass('active');
        }
    }
    
    function isMobile(){
        return window.innerWidth < 845 ? true : false;
    }
    
    $('.toggle-button').click(function(){
        if(isMobile()){
            toggleClass( $(this).attr('data-toggle-user') );
        }
    });
    
    $('.agent-profile-card .image').click(function(){
        if(isMobile()){
            toggleClass($(this).attr('data-toggle-user'));
        }
    });
    
    $('.agent-profile-card').on('hover mouseenter', function(){
    
        if(!isMobile()){
            toggleClass($(this).attr('id'));
        }});
    
    $('.agent-profile-card').on('blur mouseleave', function(){
        if(!isMobile()){
            toggleClass($(this).attr('id'));
        }
    });
    
    // function isMobile(){
    //     return window.innerWidth < 845 ? true : false;
    // }
    
    // $('.profile-img-link').click(function(e){
    //     if( isMobile() ){
    //         e.preventDefault();
    //     }
    // });

    // $('.epl-author-box').on('mouseover focus', function(){
    //     $(this).children('.profile-img-link').children('.agent-frame-holder').children('.agent-gif-frame').hide();
    // });
    // $('.epl-author-box').on('mouseout blur', function(){
    //     $(this).children('.profile-img-link').children('.agent-frame-holder').children('.agent-gif-frame').show();
    // });

    // $('.epl-author-box').on( 'mouseover click', function(){
    
    //     if( !isMobile() && $(this).parent('#team-list')[0]){

    //         $(this).find('video').get(0).play();

    //     }
    // });

    // $('.epl-author-box').on( 'blur mouseout', function(){

    //     if( $(this).parent('#team-list')[0] ){
    //         $(this).find('video').get(0).currentTime = 0;
    //         $(this).find('video').get(0).pause();

    //         // $(this).children('.hover-btn-link').hide();
    //     }
    // });

    // // Autoplay Agent Profiles on hover.

    // var figure = $(".video").hover( hoverVideo );
	// function hoverVideo(e) { $('video', this).get(0).play(); }
    // =======================================================================================================
    // =======================================================================================================
    // =======================================================================================================

    function getRexDocuments(id){

        const dropdown = $('#dropdown-options');
        const dropdownOptions = $('#dropdown-options');
        const loader = $('#loading-contract');
        let htmlOutput = "";

        // If the loader exists in the dropdown
        if( dropdown.find(loader).length == 1 && id != "" ){

            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: "/wp-admin/admin-ajax.php",
                timeout: 5000,
                data: {
                    action:'get_rex_document_data',
                    id: id
                },
                method : 'POST', //Post method
                success : function( response ){

                    // console.log(response);
                    if( response.error != null ){
                        htmlOutput += `<a class="dropdown-item p-3" href="/contact-us">Error:<br /><small>${response.error.message}</small><br /><small>Please reload to try again <br />or contact us for assistance</small></a>`;

                    } else if( response == null || response.result == null ){
                        htmlOutput += `<a class="dropdown-item p-3" href="/contact-us">Error: The response is null. <br /><small>Please reload to try again <br />or contact us for assistance</small></a>`;
                    } else {
                        const documents = response.result.related.listing_documents;

                        // console.log(documents)
                        // console.log('____________');

                        let doclinks = [];
                        documents.forEach( (doc) => {

                            // NEED TO GET ONLY DOCS THAT ARE PUBLIC AND MATCH WHAT WE NEED.
                            // console.log(doc);
                            
                            if( doc.privacy.id == 'public' ){
                                // console.log('PUBLIC: ' +  doc.description)
                                var doc_title = doc.description.split(' -')

                                if( doc_title[0].toLowerCase().includes('title') ){
                                    doc_title[0] = "Title Search";
                                }

                                doclinks.push({title: doc_title[0], link: "https:" + doc.url});
                            }

                        });
    
                        if( doclinks.length == 0 ){
                            doclinks.push({title: "No documents found.<br /><small>Contact us for documents about this property.</small>", link: "/contact-us"});
                        }

                        doclinks.forEach( (link) => {
                            htmlOutput += `<a class="dropdown-item p-3" href="${link.link}" target="_blank" rel="noopener">${link.title}</a>`;
                        } );
                    }

                },
                error : function(error){
                    console.log(error);
                    htmlOutput += `<a class="dropdown-item p-3" href="/contact-us">${error.status}: ${error.statusText} <br /><small>Please reload to try again <br />or contact us for assistance</small></a>`;
                }
            }).done(
                function(){
                    setTimeout( () => {
                        dropdownOptions[0].innerHTML = htmlOutput;
                    }, 1000, dropdownOptions, htmlOutput)
                    return true;
                }
            );

        } else {

            // do nothing
            return false;
        }
    }

    $('#contract-links').on('show.bs.dropdown', function () {
        let rexID = this.dataset.id;
        getRexDocuments(rexID)
    })

    // =======================================================================================================
    // TIMED POPUP FOR SMS PROMPT
    // This timed popup is to display a prompt for mobile only users to SMS image about career opportunities
    // This function gets called and looks for the dom element.
    // You will need to set a target div of #sms-prompt-popup on your page.
    // HTML content and css/styling will be set here and prepended to the page.
    // This function will set timeout and set/read cookies for the page it is on.
    // =======================================================================================================

    function sendSMSPrompt(){

        // sessionStorage.setItem('promptshown', false)

        let alreadyDisplayed = sessionStorage.getItem("promptshown");
        let screenWidth = window.innerWidth;
        let popup = document.getElementById('sms-prompt-popup');
        
        // check if mobile user
        if( screenWidth < 600 ){
            
            // check if cookie is set to display/hide prompt
            if( alreadyDisplayed != "true" ){
                
                // wait for some time
                setTimeout( function(){

                    popup.classList.add('active');
                    sessionStorage.setItem('promptshown', "true");

                }, 6000);
                
            }
            
        }

    }

    const smsPrompt = document.getElementById('sms-prompt-popup');
    const smsPromptClose = document.getElementById('sms-prompt-close');

    if( smsPrompt ){
        sendSMSPrompt();
    }

    if( smsPromptClose ){
        smsPromptClose.addEventListener('click', function(){
            smsPrompt.classList.remove('active');
        });
    }


    // =======================================================================================================
    // =======================================================================================================




    // =======================================================================================================
    // =======================================================================================================
    // =======================================================================================================
    // // SEARCH FOR AGENT BY SUBURB
    // On key up search through all the agents and hide any that do not match the search
    // display all on empty
    // do other stuff too idk yet

    function filterAgents(filter, section){

        // Find all the agent cards
        const agentCards = $('#' + section + ' .agent-profile-card');

        // For each agent card, find the suburb and if it matches the filter, hide or show the card
        agentCards.map( (i, card) => {

            let cardSuburb = card.dataset.suburb;

            if( filter == "*" ){

                card.style.display = "block";

            } else if (cardSuburb.toLowerCase() == '' || ( cardSuburb.toLowerCase().includes( filter.toLowerCase() )  || cardSuburb.toLowerCase() == filter.toLowerCase()  ) ){

                card.style.display = "block";
                
            } else {
                
                card.style.display = "none";

            }

        });

    }

    // Find the search field
    const suburbSearchField = $('#suburbSearch');

    // Update the filter as the user types
    suburbSearchField.on('input', function(e){

        const searchText = e.target.value;

        filterAgents(searchText);

    });

    // Find the filter buttons
    const agentFilterButtons = $('.suburb-filter');
    
    // for each button add a click event to set active state, and update the filter
    agentFilterButtons.map( (i, filterButton) => {
        
        filterButton.addEventListener('click', function(){

            // Get current filter
            let currentFilter = document.getElementById('suburbSearch');
            let currentFilterVal = currentFilter.dataset.suburb;
            
            // Remove all the active states
            agentFilterButtons.map( (i, button) => {
                button.classList.remove('active');
            });

            let filter = this.dataset.filter;
            let section = this.dataset.section;

            if( currentFilterVal == filter){
                

                filter = "*";
                
            } else {
                
                this.classList.add('active');
            }

            currentFilter.dataset.suburb = filter;

            filterAgents(filter, section);

            // $('#suburbSearch')[0].value = '';

        });

    });

    // =======================================================================================================
    // =======================================================================================================
    // =======================================================================================================
    
    
    
    
    // =======================================================================================================
    // =======================================================================================================
    // =======================================================================================================
    

    // Change the submitted value in the search form on the home page (Buy/Rent/Sell)
    $("#search-submit").on("click", function(e) {
        e.preventDefault();
        var $value = $( "#property-type" ).val();
        if ($value == 'sold') {
            window.location.href= '/homes-for-sale/?action=epl_search&property_status=sold';
        }
        else if ($value == 'sell-your-home') {
            window.location.href = '/selling-with-image/';
        }
        else { 
            $('#home-search-form').attr('action', $value).submit();
        }
    });

    // WHAT
    $(function(){
        $('#property-select').on('change', function () {
            var url = jQuery(this).val(); // get selected value
            if (url) { // require a URL
                window.location = url; // redirect
            }
            return false;
        });
    });

    // $('#property-search').on('submit', function(e) {
    //     e.preventDefault();
    //     var locations = jQuery('#location-select').val().join(',');
    //     window.location = '?location=' + locations;
    // });

    // Makes the footer part of the mobile navigation so we don't have to load two menus
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('no-overflow');
        $('#wrapper-footer-full').toggleClass('footer-open');
        $('#wrapper-footer-full').toggleClass('fixed');
        setTimeout( function(){ $('#wrapper-footer-full').toggleClass('expand'); },1);
    });

    $("#menuModal").on("hidden.bs.modal", function () {
        $(".hamburger").removeClass('is-active');
    });

    // Hamburger Menu
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });

    // Fancy Dropdown? What ****WAT IT DO?! *****
    $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
    });

    $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
    }); // END WOT IT DO?

    // Flex slider image gallery
    jQuery('.mason-gallery a').simpleLightbox();
    jQuery('.featured-image a').simpleLightbox();
    jQuery('#slider li a').simpleLightbox();

});

// /*
// * ====================
// * Animated Search Bar
// * ====================
// */

// //Add something to given element placeholder
// function addToPlaceholder(toAdd, el) {
//     el.attr('placeholder', el.attr('placeholder') + toAdd);
//     // Delay between symbols "typing" 
//     return new Promise(resolve => setTimeout(resolve, 50));
// }

// //Clear placeholder attribute in given element
// function clearPlaceholder(el) {
//     el.attr("placeholder", "");
// }

// //Print one phrase
// function printPhrase(phrase, el) {
//     return new Promise(resolve => {
//         // Clear placeholder before typing next phrase
//         clearPlaceholder(el);
//         let letters = phrase.split('');
//         // For each letter in phrase
//         letters.reduce(
//             (promise, letter, index) => promise.then(_ => {
//                 // Resolve promise when all letters are typed
//                 if (index === letters.length - 1) {
//                     // Delay before start next phrase "typing"
//                     setTimeout(resolve, 1000);
//                 }
//                 return addToPlaceholder(letter, el);
//             }),
//             Promise.resolve()
//         );
//     });
// } 

// //Print given phrases to element
// function printPhrases(phrases, el) {
//     phrases.reduce(
//         (promise, phrase) => promise.then(_ => printPhrase(phrase, el)), 
//         Promise.resolve()
//     );
// }

// //Start typing
// function run() {
//     let phrases = [
//         "Your image is our business",
//         "Your life is our priority",
//         "Your success, Our Mission",
//     ];

//     printPhrases(phrases, jQuery('#inputCity'));
// }
// run();

