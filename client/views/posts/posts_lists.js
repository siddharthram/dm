var postsData=[
{
	title: 'Introducing Telescope',
	author: 'Siddharth Ram',
	url: 'http://nayna.org'
},
{
 title: 'Meteor',
 author: 'Tom Coleman',
 url: 'http://meteor.com'
 }, 
 {
 title: 'The Meteor Book',
 author: 'Tom Coleman',
 url: 'http://themeteorbook.com'
 }
];

Template.postsList.helpers({
	posts: postsData
});
