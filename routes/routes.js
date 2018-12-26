export default [
    {
        alias:"",
        url:"/",
        method:"GET",
        action:"HomeController@getUsers"
    },
    {
        alias:"",
        url:"/test",
        method:"GET",
        action:"HomeController@getTemplate"
    }
]