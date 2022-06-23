import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@fury/services/splash-screen.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
  	private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private document: Document,
              private platform: Platform,
              private route: ActivatedRoute,
              private splashScreenService: SplashScreenService) 
  {
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);

    const menu: SidenavItem[] = [];

	  menu.push({
		  name: 'Deals',
		  routeOrFunction: '/apps/deals',
		  icon: 'mail',
		  position: 1,
		  badge: '22',
		  badgeColor: '#7986CC'
	  });

    menu.push({
      name: 'Search',
      routeOrFunction: '/apps/search',
      icon: 'search',
      position: 2,
      badge: '22',
      badgeColor: '#7986CC'
    });

 	  menu.push({
		  name: 'Messages',
		  routeOrFunction: '/apps/messages',
		  icon: 'messages',
		  position: 3,
		  badge: '22',
		  badgeColor: '#7986CC'
	  });

	  menu.push({
		  name: 'Feed',
		  routeOrFunction: '/apps/feed',
		  icon: 'description',
		  position: 4,
		  badge: '22',
		  badgeColor: '#7986CC'
	  });

	  menu.push({
		  name: 'Task List',
		  routeOrFunction: '/apps/task_list',
		  icon: 'assignment',
		  position: 5,
		  badge: '22',
		  badgeColor: '#7986CC'
	  });

	  menu.push({
	  name: 'Inbox',
	  routeOrFunction: '/apps/inbox',
	  icon: 'mail',
	  position: 6,
	  badge: '22',
	  badgeColor: '#7986CC'
  });

    menu.push({
      name: 'Chat',
      routeOrFunction: '/apps/chat',
      icon: 'chat',
      position: 7,
      badge: '14',
      badgeColor: '#E15C74'
    });

    menu.push({
      name: 'Calendar',
      routeOrFunction: '/apps/calendar',
      icon: 'date_range',
      position: 8
    });

    const search_opts = {
      name: 'opts',
      routeOrFunction: '/apps/opts',
      position: 1
    }

      const deals = {
          name: 'deals',
          routeOrFunction: '/apps/deals',
          position: 2
      }

      const playnav = {
          name: 'playNav',
          routeOrFunction: '/apps/playnav',
          position: 3
      }

    menu.push({
      name: 'dwPages',
      icon: 'layers',
      position: 9,
      subItems: [
        search_opts,
        deals,
          playnav
      ]
    });

     menu.push({
      name: 'Components',
      routeOrFunction: '/components',
      icon: 'layers',
      position: 10
    });

    const formElements = {
      name: 'Form Elements',
      routeOrFunction: '/forms/form-elements',
      position: 1
    }

    const formWizard = {
      name: 'Form Wizard',
      routeOrFunction: '/forms/form-wizard',
      position: 2
    }

    menu.push({
      name: 'Forms',
      icon: 'insert_comment',
      position: 11,
      subItems: [
        formElements,
        formWizard
      ]
    });

    const simpleTable = {
      name: 'Simple Table',
      routeOrFunction: '/tables/simple-table',
      position: 1
    }

    const allInOneTable = {
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      position: 2
    }

    menu.push({
      name: 'Tables',
      icon: 'format_line_spacing',
      position: 12,
      subItems: [
        simpleTable,
        allInOneTable
      ]
    });

    const googleMaps = {
      name: 'Google Maps',
      routeOrFunction: '/maps/google-maps'
    }

    menu.push({
      name: 'Maps',
      icon: 'map',
      position: 13,
      subItems: [
        googleMaps
      ],
      badge: '3',
      badgeColor: '#4CAF50'
    });

    menu.push({
      name: 'Material Icons',
      routeOrFunction: '/icons',
      icon: 'grade',
      position: 14
    });

    const login = {
      name: 'Login Page',
      routeOrFunction: '/login',
      position: 1
    }

    const register = {
      name: 'Register Page',
      routeOrFunction: '/register',
      position: 2
    }

    const forgotPassword = {
      name: 'Forgot Password',
      routeOrFunction: '/forgot-password',
      position: 3
    }

    menu.push({
      name: 'Custom Pages',
      icon: 'web',
      position: 15,
      subItems: [
        login,
        register,
        forgotPassword
      ]
    });

    menu.push({
      name: 'Drag & Drop',
      routeOrFunction: '/drag-and-drop',
      icon: 'mouse',
      position: 16
    });

    menu.push({
      name: 'WYSIWYG Editor',
      routeOrFunction: '/editor',
      icon: 'format_shapes',
      position: 17
    });

    const level5 = {
      name: 'Level 5',
      routeOrFunction: '/level1/level2/level3/level4/level5'
    }

    const level4 = {
      name: 'Level 4',
      subItems: [level5]
    }

    const level3 = {
      name: 'Level 3',
      subItems: [level4]
    }

    const level2 = {
      name: 'Level 2',
      subItems: [level3]
    }

    const level1 = {
      name: 'Level 1',
      subItems: [level2]
    }

    menu.push({
      name: 'Multi-Level Menu',
      icon: 'menu',
      position: 18,
      subItems: [level1]
    });

    // Send all created Items to SidenavService
    menu.forEach(item => sidenavService.addItem(item));
  }
}
