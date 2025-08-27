# Nexa HR Web App

It consists of two parts:

* **Client:** React + Vite + TypeScript + Mantine UI + TailwindCSS
* **Server:** Python + FastAPI (exposed with Uvicorn)

Live demo: [https://nexa-hr.vercel.app](https://nexa-hr.vercel.app/)

> The login form on the homepage is currently not validated  you can access the dashboard by clicking the Login button without filling in credentials.

---

## Project Structure

```
nexa-hr/
│── client/     # React (Vite + TS + Mantine + Tailwind)
│── server/     # Python (FastAPI)
│── docker-compose.yml
│── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/gerismumo/nexa-hr
cd nexa-hr
```
Create a `.env` file:

```env
cd client
VITE_API_URL=http://localhost:8000
```
---

### 2. Run with Docker (Recommended)

Ensure you have **Docker** and **Docker Compose** installed.

```bash
docker compose up -d
```

* Client     [http://localhost:3000](http://localhost:3000)
* Server   [http://localhost:8000](http://localhost:8000)

The server runs with:

### 3. Run Client (Without Docker)

```bash
cd client
npm install
```

Start development server:

```bash
npm run dev
```

The app will be available at  [http://localhost:](http://localhost:3000)5174

---

### 4. Run Server (Without Docker)

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Server runs on  [http://localhost:8000](http://localhost:8000)

---

## Tech Stack

**Client:**

* React
* Vite
* TypeScript
* Mantine UI
* TailwindCSS

**Server:**

* Python
* FastAPI
* Uvicorn

---

## License

This project is licensed under the **MIT License**.
