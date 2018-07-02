import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  public menu_state = 0;
  public expanded = false;
  public scrolled = 0;
  public scrolling = false;

  constructor() { }

  ngOnInit() {
    const _this = this;
    $('#expand-list').click(function (ev) {
      _this.calculate_opening();
    });
    $('body').click(function (ev) {
      if (
        $('header').has(ev.target).length === 0 &&
        !$('header').is(ev.target)
      ) {
        _this.closeMenu();
        _this.menu_state = 0;
      }
    });
    $('.drawing-list-item').click(function () {
      _this.closeMenu();
      _this.menu_state = 0;
    });
    $('#menu-opener').click(function (ev) {
      if (_this.expanded) {
        _this.closeMenu();
        _this.menu_state = 0;
      } else {
        _this.calculate_opening(true);
      }
    });
    $('i.fa-times').click(function () {
      _this.closeMenu();
    });
    $(window).on('orientationchange resize', function (ev) {
      _this.menu_state--;
      _this.calculate_opening();
    });

    $('#drawing').on('scroll', this.drawing_scroll);
    if (this.isMobile()) {
      $('#drawing').off();
    }
  }


  isMobile() {
    if (/Android|iPhone/i.test(window.navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }

  closeMenu() {
    $('#drawing').css({
      height: '0px',
      overflow: 'hidden'
    });
    $('#expand-list i:first').attr('class', 'fas fa-ellipsis-h');
    $('i.fa-times').css('display', 'none');

    this.menu_state = -1;
    this.expanded = false;
  }

  drawing_scroll() {
    if (this.menu_state === 1 && !this.scrolling) {
      const iCurScrollPos = $(this).scrollTop();
      this.scrolling = true;
      if (iCurScrollPos > this.scrolled) {
        this.scrolled = iCurScrollPos + 140;
      } else {
        this.scrolled = iCurScrollPos - 140;
      }
      $('#drawing').animate(
        {
          scrollTop: this.scrolled
        },
        400,
        function () {
          setTimeout(function () {
            this.scrolling = false;
          }, 50);
        }
      );
    }
  }

  calculate_opening(menu: boolean = false) {
    if (this.menu_state > 0 && menu) {
      this.closeMenu();
      this.menu_state = 0;
      return;
    }

    const window_height = $(window).height();
    const head_height = parseInt($('#head').css('height'), 10);
    const expand_height = parseInt($('#expand-list').css('height'), 10);
    const list_height = parseInt($('#drawing-list').css('height'), 10);

    switch (this.menu_state) {
      case 0:
        $('#drawing').css({
          'height': '140px',
          'overflow-y': 'scroll'
        });
        $('#expand-list i:first').attr('class', 'fas fa-chevron-down');
        $('#expand-list i.fa-times').css('display', 'table-cell');
        this.menu_state = this.menu_state + 1;
        this.expanded = false;
        break;
      case 1:
        if (window_height <= head_height + expand_height + list_height) {
          $('#drawing').css({
            height: window_height - head_height - expand_height,
            'overflow-y': 'scroll'
          });
        } else {
          $('#drawing').css({
            height: list_height,
            overflow: 'hidden'
          });
        }
        $('#expand-list i:first').attr('class', 'fas fa-chevron-up');
        this.menu_state = 0;
        this.expanded = true;
        break;
      case 2:
        this.closeMenu();
        this.menu_state = 0;
        break;
    }
    if ($('#drawing-list').css('height') === '140px' && this.menu_state !== 0) {
      $('#expand-list i:first').attr('class', 'fas fa-chevron-up');
      this.menu_state = 2;
    }
    if (this.menu_state === -1) {
      this.menu_state++;
    }
  }
}
