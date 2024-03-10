use async_trait::async_trait;
use sqlx::postgres::PgPoolOptions;
use sqlx::{Pool, Postgres};
use std::sync::Arc;

use crate::config::env;

#[async_trait]
pub trait DBInterface {
    async fn new() -> Self;
}

#[derive(Debug)]
pub struct DB(pub(crate) Arc<Pool<Postgres>>);

#[async_trait]
impl DBInterface for DB {
    async fn new() -> DB {
        let database_url = env().database_url();
        let pool = PgPoolOptions::new()
            .max_connections(5)
            .connect(database_url)
            .await;

        match pool {
            Ok(pool) => DB(Arc::new(pool)),
            Err(e) => {
                panic!(
                    "Cannot connect to the database. Please check your configuration. {:?}",
                    e
                )
            }
        }
    }
}
