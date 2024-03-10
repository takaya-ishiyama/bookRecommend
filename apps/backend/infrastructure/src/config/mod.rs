pub struct Env {
    database_url: String,
}
impl Env {
    pub fn database_url(&self) -> &str {
        &self.database_url
    }
}
pub fn env() -> &'static Env {
    unsafe {
        dotenv::dotenv().ok();
        let option_database_url = std::env::var("DATABASE_URL").ok();
        let database_url = match option_database_url {
            Some(database_url) => database_url,
            None => panic!("DATABASE_URL where singleton env is not set"),
        };
        if SINGLETON_ENV.is_none() {
            SINGLETON_ENV = Some(Env { database_url });
        }
        SINGLETON_ENV.as_ref().unwrap()
    }
}
static mut SINGLETON_ENV: Option<Env> = None;
