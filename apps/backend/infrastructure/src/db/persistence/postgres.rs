use async_trait::async_trait;
use sqlx::postgres::PgPoolOptions;
use sqlx::{Pool, Postgres};
use std::sync::Arc;

#[async_trait]
pub trait DBInterface {
    async fn new() -> Self;
}

#[derive(Debug)]
pub struct DB(pub(crate) Arc<Pool<Postgres>>);

#[async_trait]
impl DBInterface for DB {
    async fn new() -> DB {
        dotenv::dotenv().ok();
        let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL is not set");
        // panic!("DATABASE_URL: {}", database_url);

        let pool = PgPoolOptions::new()
            .max_connections(5)
            .connect(database_url.as_str())
            .await
            .unwrap_or_else(|_| {
                panic!("Cannot connect to the database. Please check your configuration.")
            });
        DB(Arc::new(pool))
    }
}
