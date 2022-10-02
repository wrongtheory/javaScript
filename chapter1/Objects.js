// object literals

const blogs = [
    {title: 'mac', likes: 30},
    {title: 'linux', likes: 50}
];

console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'vleunti@gmail.com',
    location: 'Berlin',
    blogs: [
        {title: 'mac', likes: 30},
        {title: 'linux', likes: 50}
    ],
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user);
console.log(user.name);

user.age = 25;
console.log(user.age);

console.log(user['name']);
user['name'] = 'HZ';
console.log(user['name']);

console.log(typeof user);

user.login();

user.logout();

user.logBlogs();

//Math Object

console.log(Math.PI);

const area = 7.7;

console.log(Math.round(area));

//random number

const random = Math.random();
console.log(Math.round(random*49));

