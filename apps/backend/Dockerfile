FROM rust:bookworm AS builder

WORKDIR /backend
COPY . .

# RUN cargo install sqlx-cli
# このイメージだと下記のあたりの原因だと思われるでエラーが出る。ubuntuとかでやるの面倒なのでローカル環境で.sqlxを作成してコピーする
# https://github.com/launchbadge/sqlx/issues/1737#issuecomment-1061133824
# RUN cargo sqlx prepare --workspace
RUN cargo build --release

# production stage
FROM debian:bookworm-slim AS runner
 
WORKDIR /backend
ENV RUST_ENV=production
ENV SQLX_OFFLINE=true
COPY --from=builder /backend/.sqlx /backend/.sqlx
COPY --from=builder /backend/target/release/infrastructure /bin/
RUN apt-get update && \
    apt-get install -y --no-install-recommends openssl libssl-dev
EXPOSE 8080
CMD ["/bin/infrastructure"]