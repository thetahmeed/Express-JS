





// A template engine enables you to use static template files in your application.
At runtime, the template engine replaces variables in a template file with actual values, 
and transforms the template into an HTML file sent to the client. This approach 
makes it easier to design an HTML page.

// Here we will use EGJ

// 1. Comand "npm install ejs" to install ejs

// 'Express JS' provide us a default 'template engine' we just have chnage the 'default' to 'ejs'

// 2. to chnage: mApp.set('view engine', 'ejs')
// or
mApp.set('views', 'template/views')

// 3. we have to create a new directry called 'views'

// 4. create a .ejs file called 'index.ejs'

// 5. follow app.js for rest