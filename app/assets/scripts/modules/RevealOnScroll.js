import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsPhoneNumbers = $('.header__phone');
        this.itemsAdvantages = $('.advantages__description');
        this.itemsModels = $('.ref-models__list');
        this.itemsProblems = $('.problems__description');
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsModels.addClass('reveal-item');
    }
    createWaypoints() {
        var correctThis = this;
        this.itemsPhoneNumbers.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('animated bounceInDown');
                }
            });
        });
        this.itemsAdvantages.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('animated fadeInRight');
                },
                offset: '85%'
            });
        });
        this.itemsModels.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: '85%'
            });
        });
        this.itemsProblems.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('animated bounceInLeft');
                },
                offset: '50%'
            });
        });
    }
};
export default RevealOnScroll;