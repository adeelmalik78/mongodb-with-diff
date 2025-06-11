// liquibase formatted mongodb
// changeset amalik:orders runWith:mongosh
db = db.getSiblingDB( 'test' );
db.createCollection('orders');
// rollback db.orders.drop();

// changeset amalik:person2 runWith:mongosh
db = db.getSiblingDB( 'test' );
db.createCollection('person2');
// rollback db.person2.drop();

// changeset amalik:company runWith:mongosh
db = db.getSiblingDB( 'test' );
db.createCollection('company');
// rollback db.company.drop();

// changeset amalik:books runWith:mongosh
db.createCollection('books');
// rollback db.books.drop();

// changeset amalik:insertMany_products runWith:mongosh
db.products.insertMany( [
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps" , qty: 30 }
] );
// rollback db.products.drop();

// changeset amalik:insertOne_MongoDB_Tutorial runWith:mongosh
db.books.insertOne({ 
    title: 'MongoDB Tutorial',
    isbn: '0-8888-8888-8'
});
// rollback empty


// changeset amalik:updateMany runWith:mongosh
db.restaurant.updateMany(
    { violations: { $gt: 4 } },
    { $set: { "Review" : true } }
 );
// rollback empty