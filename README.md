# AWS ECS & ECR Simple Demo

Repo ini berisi aplikasi Node.js sederhana untuk mendemonstrasikan proses deployment ke **Amazon Elastic Container Registry (ECR)** dan **Amazon Elastic Container Service (ECS)**.

## File Utama
- `app.js`: Aplikasi web simpel menggunakan Express.
- `Dockerfile`: Instruksi untuk membungkus aplikasi ke dalam Container.
- `AWS_ECS_ECR_Tutorial.pdf`: Referensi detail arsitektur dan langkah-langkah AWS Console.

## Langkah-Langkah Deployment

### 1. Persiapan ECR (Melalui AWS CLI)
Login ke ECR (Ganti `[ACCOUNT_ID]` dan `[REGION]`):
```bash
aws ecr get-login-password --region [REGION] | docker login --username AWS --password-stdin [ACCOUNT_ID].dkr.ecr.[REGION].amazonaws.com
```

### 2. Build & Tag Image
Build image lokal:
```bash
docker build -t ecs-ecr-demo .
```

Tag image untuk ECR:
```bash
docker tag ecs-ecr-demo:latest [ACCOUNT_ID].dkr.ecr.[REGION].amazonaws.com/koperasi-app:latest
```

### 3. Push ke ECR
```bash
docker push [ACCOUNT_ID].dkr.ecr.[REGION].amazonaws.com/koperasi-app:latest
```

### 4. Update ECS Service
Setelah image berhasil di-push, update service di ECS untuk memulai rolling update:
```bash
aws ecs update-service --cluster ecs-lab-cluster --service ecs-lab-service --force-new-deployment
```

---
*Referensi Lengkap: Silakan buka file [AWS_ECS_ECR_Tutorial.pdf](./AWS_ECS_ECR_Tutorial.pdf) untuk panduan visual dan konfigurasi infrastruktur detail.*
