FROM rust:bookworm AS builder

WORKDIR /backend
COPY . .

RUN cargo install sqlx-cli
RUN cargo sqlx prepare --workspace
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