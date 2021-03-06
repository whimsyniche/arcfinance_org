jQuery(document).ready(function() {
    jQuery(".post-type-archive-learn .learnPosts").each(function() {
        var categoryClasses = [];
        jQuery(this).find(".categories a").each(function() {
            strClass = jQuery(this).text();
            strClass = strClass.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
            if (jQuery(this).hasClass('selcountry')) {
                strClass = 'country_' + strClass;
            }
            categoryClasses.push(strClass);
        });
        jQuery(this).addClass(categoryClasses.join(' '));
    });
    //display results or hide results
    function noResultDisplay() {
        visLearn = jQuery(".post-type-archive-learn .learnPosts:visible").size();
        if (visLearn > 0) {
            jQuery(".post-type-archive-learn #noResults").css("display", "none")
        } else {
            jQuery(".post-type-archive-learn #noResults").css("display", "block")
        }
    }
    jQuery('select').prop('selectedIndex', 0);
    jQuery(".post-type-archive-learn #country").change(function() {
        jQuery('.post-type-archive-learn #implementation_partner').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #project_type').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #technology').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #publication_type').prop('selectedIndex', 0);
        var strSelect = "";
        strSelect = jQuery(".post-type-archive-learn #country option:selected").text();
        strSelect = strSelect.replace(/[^a-z0-9\s]/gi, '').replace(/[\s]/g, '_');
        if (strSelect == "Country") {
            jQuery(".post-type-archive-learn .learnPosts").show("slow");
        } else {
            strSelectClass = ".country_" + strSelect;
            jQuery(".post-type-archive-learn .learnPosts").hide();
            jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry").hide();
            jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .zpt").hide()
            jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry" + strSelectClass).each(function() {
                jQuery(this).show();
                parentClasses = jQuery(this).parent().parent().parent().parent().attr('class');
                jQuery(this).parent().parent().parent().parent().show();
            });
        }
        noResultDisplay();
    });
    jQuery(".post-type-archive-learn #implementation_partner").change(function() {
        jQuery('.post-type-archive-learn #country').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #project_type').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #technology').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #publication_type').prop('selectedIndex', 0);
        var strSelect = "";
        strSelect = jQuery(".post-type-archive-learn #implementation_partner option:selected").text();
        strSelect = strSelect.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry").show();
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .zpt").show();
        if (strSelect == "Organization") {
            jQuery(".post-type-archive-learn .learnPosts").show("slow");
        } else {
            strSelectClass = "." + strSelect;
            jQuery(".post-type-archive-learn .learnPosts").hide();
            jQuery(strSelectClass).show("slow");
        }
        noResultDisplay();
    });
    jQuery(".post-type-archive-learn #project_type").change(function() {
        jQuery('.post-type-archive-learn #country').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #implementation_partner').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #technology').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #publication_type').prop('selectedIndex', 0);
        var strSelect = "";
        strSelect = jQuery(".post-type-archive-learn #project_type option:selected").text();
        strSelect = strSelect.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry").show();
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .zpt").show();
        if (strSelect == "Topic") {
            jQuery(".post-type-archive-learn .learnPosts").show("slow");
        } else {
            strSelectClass = "." + strSelect;
            jQuery(".post-type-archive-learn .learnPosts").hide();
            jQuery(strSelectClass).show("slow");
        }
        noResultDisplay();
    });
    jQuery(".post-type-archive-learn #technology").change(function() {
        jQuery('.post-type-archive-learn #country').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #project_type').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #implementation_partner').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #publication_type').prop('selectedIndex', 0);
        var strSelect = "";
        strSelect = jQuery(".post-type-archive-learn #technology option:selected").text();
        strSelect = strSelect.replace(/[^a-zA-Z0-9]/g, '')
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry").show();
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .zpt").show();
        if (strSelect == "Technology") {
            jQuery(".post-type-archive-learn .learnPosts").show("slow");
        } else {
            strSelectClass = "." + strSelect;
            jQuery(".post-type-archive-learn .learnPosts").hide();
            jQuery(strSelectClass).show("slow");
        }
        noResultDisplay();
    });
    jQuery(".post-type-archive-learn #publication_type").change(function() {
        jQuery('.post-type-archive-learn #country').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #project_type').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #implementation_partner').prop('selectedIndex', 0);
        jQuery('.post-type-archive-learn #technology').prop('selectedIndex', 0);
        var strSelect = "";
        strSelect = jQuery(".post-type-archive-learn #publication_type option:selected").text();
        strSelect = strSelect.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .selcountry").show();
        jQuery(".post-type-archive-learn .learnPosts .tag-cloud .categories.countries .zpt").show();
        if (strSelect == "PublicationType") {
            jQuery(".post-type-archive-learn .learnPosts").show("slow");
        } else {
            strSelectClass = "." + strSelect;
            jQuery(".post-type-archive-learn .learnPosts").hide();
            jQuery(strSelectClass).show("slow");
        }
        noResultDisplay();
    });
});
