06/07/2022

1) Tour of Heroes tutorial

2) Run time error which was solved by the solution searched on the google.

3) Successfully created git repositories for angular, HTML as well as type script

Errors:

    a) while installing type script I came up with the error "npm update check failed. Try running with sudo or get access to the local update config store via sudo chown -R $USER:$(id -gn $USER) C:\Users\rusprajapati\.config"

    Soltion: so I went on to C:\Users.config and deleted the "configstore" folder. once I done this, next time a ran npm start, the folder was re-generated, and error stopped.

    b) npm ERR! code 404 while running the command "npm install --save-dev @babel/present-typescript"

    Solution: 	npm config set registry http://registry.npmjs.org
		    npm install -g @angular/cli 

		    If still not working try this:

		    npm -g install npm
		    npm cache clean -f
		    npm install -g n

06/08/2022

1) I made points for class vs instace of class.

2) Working on the task where I am suppose to:

    create dummy service to display data. Create two Instances of it and display it in this style

    navigation to the new page

    demostrate two existence of two instances of same service

Error: 
You have not concluded your merge (MERGE_HEAD exists)
    
    Solution:
            git merge --abort
            git reset --merge
            git reset --hard origin/master

Error: 
Please clean your repository working tree before checkout
    
    Solution: (Did not work)
            git stash
            git stash pop
            git push -f origin

06/09/2022

1) Continue with the Given task

2) Topics: Selector, Instance of a service of Component, Routing


Error: Can't bind to 'routeLink' since it isn't working properly

Solution: Need to add RouteModule to imports of every @NgModule where components use any component or directive.

Error: Error occurs in the template of component upperCaseComponent

Solution: If you are trying to access variable within template you need to declare it as a public as if you declare it as private it would be accessible only within the class.

06/10/2022

    a) Selector: <app-root></app-root>. File: index.html

    Selector tells angular to create an insert and instace of this component whereever it finds <app-root> tag in th parent HTML

    b) Routing:

    App will have multiple components. Each components will have it's own view. So, we need a way to navigate between different views as and when user performs some action. For, this routing is used. 

    eg. If we create Dashboard than only elements in Dashboard can we displayed.

    File: app-routing.module.ts

    const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'ss', component: MultipleServicesComponent },
    { path: 'detail/:id', component: ServiceDetailComponent }
    ];

    But angular does not know about this routing yet.
    To make this app know about this route

    imports: [ RouterModule.forRoot(routes) ] where forRoot is a method where routes is passed. 

    @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
    })

    Now application knows.

    We need to tell angular where to display view when one of this is passed.

    File: app.component.html

    <router-outlet></router-outlet> will tell angular where in the pagewe want to display the view.

    e.g localhost:4200/detail/13

    06/13/2022

    a) Created mock-multiple-services.ts, ms-search (ts,html,css), multimessages (ts,html,css), multiple-services (ts,html,css), service.ts, service-detail (css,html,ts), ms.service.ts, multimessages.service.ts. 

    b) Modified app.module.ts, app.component.html, app-routing.module.ts

Error: {path: 'heroes2', component:HeroComponent} added this path as it was missing in app-routing.module.ts file

    06/14/2022

    a) Class: Class is a “template” / “blueprint” that is used to create objects. Basically, a class will consists of field, static field, method, static method and constructor. Field is used to hold the state of the class (eg: name of Student object). Method is used to represent the behavior of the class (eg: how a Student object going to stand-up). Constructor is used to create a new Instance of the Class.

    b) Instance: An instance is a unique copy of a Class that representing an Object.

    c) Working on adding the data to be display in Multiple Services

    d) Made few moficiations in the previously made file that are service-detail.component.ts, multiple-services.component.ts, ms-search.component.ts, multiple-services.component.html

Error: Property 'searchMService' does not exist 'MSService'. swtichMap (term: string)=> this.msService.searchMservice(term)

    (Will be solving the error tomorrow and continue from here onwards.)

    06/15/2022

    a) Modified few files, understood some concepts of angular and again made some modifications in the files.

    b) Completed the task.


06/07/2022

1) Tour of Heroes tutorial

2) Run time error which was solved by the solution searched on the google.

3) Successfully created git repositories for angular, HTML as well as type script

Errors:

    a) while installing type script I came up with the error "npm update check failed. Try running with sudo or get access to the local update config store via sudo chown -R $USER:$(id -gn $USER) C:\Users\rusprajapati\.config"

    Soltion: so I went on to C:\Users.config and deleted the "configstore" folder. once I done this, next time a ran npm start, the folder was re-generated, and error stopped.

    b) npm ERR! code 404 while running the command "npm install --save-dev @babel/present-typescript"

    Solution: 	npm config set registry http://registry.npmjs.org
		    npm install -g @angular/cli 

		    If still not working try this:

		    npm -g install npm
		    npm cache clean -f
		    npm install -g n

06/08/2022

1) I made points for class vs instace of class.

2) Working on the task where I am suppose to:

    create dummy service to display data. Create two Instances of it and display it in this style

    navigation to the new page

    demostrate two existence of two instances of same service

Error: 
You have not concluded your merge (MERGE_HEAD exists)
    
    Solution:
            git merge --abort
            git reset --merge
            git reset --hard origin/master

Error: 
Please clean your repository working tree before checkout
    
    Solution: (Did not work)
            git stash
            git stash pop
            git push -f origin

06/09/2022

1) Continue with the Given task

2) Topics: Selector, Instance of a service of Component, Routing


Error: Can't bind to 'routeLink' since it isn't working properly

Solution: Need to add RouteModule to imports of every @NgModule where components use any component or directive.

Error: Error occurs in the template of component upperCaseComponent

Solution: If you are trying to access variable within template you need to declare it as a public as if you declare it as private it would be accessible only within the class.

06/10/2022

    a) Selector: <app-root></app-root>. File: index.html

    Selector tells angular to create an insert and instace of this component whereever it finds <app-root> tag in th parent HTML

    b) Routing:

    App will have multiple components. Each components will have it's own view. So, we need a way to navigate between different views as and when user performs some action. For, this routing is used. 

    eg. If we create Dashboard than only elements in Dashboard can we displayed.

    File: app-routing.module.ts

    const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'ss', component: MultipleServicesComponent },
    { path: 'detail/:id', component: ServiceDetailComponent }
    ];

    But angular does not know about this routing yet.
    To make this app know about this route

    imports: [ RouterModule.forRoot(routes) ] where forRoot is a method where routes is passed. 

    @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
    })

    Now application knows.

    We need to tell angular where to display view when one of this is passed.

    File: app.component.html

    <router-outlet></router-outlet> will tell angular where in the pagewe want to display the view.

    e.g localhost:4200/detail/13
    
06/13/2022

    a) Created mock-multiple-services.ts, ms-search (ts,html,css), multimessages (ts,html,css), multiple-services (ts,html,css), service.ts, service-detail (css,html,ts), ms.service.ts, multimessages.service.ts. 

    b) Modified app.module.ts, app.component.html, app-routing.module.ts

Error: {path: 'heroes2', component:HeroComponent} added this path as it was missing in app-routing.module.ts file

06/14/2022

    a) Class: Class is a “template” / “blueprint” that is used to create objects. Basically, a class will consists of field, static field, method, static method and constructor. Field is used to hold the state of the class (eg: name of Student object). Method is used to represent the behavior of the class (eg: how a Student object going to stand-up). Constructor is used to create a new Instance of the Class.

    b) Instance: An instance is a unique copy of a Class that representing an Object.
    
    c) Working on adding the data to be display in Multiple Services

    d) Made few moficiations in the previously made file that are service-detail.component.ts, multiple-services.component.ts, ms-search.component.ts, multiple-services.component.html

Error: Property 'searchMService' does not exist 'MSService'. swtichMap (term: string)=> this.msService.searchMservice(term)

    (Will be solving the error tomorrow and continue from here onwards.)
    
06/15/2022

    a) Modified few files, understood some concepts of angular and again made some modifications in the files.

    b) Completed the task.
    
Error: 1) Can't push ref to remote. Try running 'Pull' first to integrate your changes
       2) Please clean your repository working tree before checout
       3) Git: fatal: Couldn't finr remote ref master

       Solved all the errors by google search and implementing them.
       
06/16/2022

    a) Gone through the link https://www.classcentral.com/course/learning-how-to-learn-2161
    b) Read toh-part5
    c) Made little progress but still facing few errors

06/17/2022

    a) Read https://www.typescriptlang.org/docs/handbook/classes.html
    b) Working on solving errors while making few modification to create intance of class.

06/18/2022

    a) Completed the given task successfully.

