use std::sync::Arc;

trait ConfigTrait {
    fn new() -> Self;
}

#[derive(Clone)]
pub struct Config {
    // env:
}
