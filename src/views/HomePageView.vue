<template>
    <div class="home-hero">
        <div class="hero-content">
        <span class="badge">Propulsé par Vue 3</span>
        <h1>Gérez vos talents sans <span>limites</span>.</h1>
        <p>
            La plateforme intuitive pour centraliser vos données collaborateurs, 
            optimiser vos départements et piloter votre croissance en un clic.
        </p>
        <div class="hero-actions">
            <button class="btn-primary">Démarrer l'expérience</button>
            <button class="btn-secondary">En savoir plus</button>
        </div>
        </div>
        
        <div class="features-grid">
        <div class="feature-card">
            <h3>Sécurité Totale</h3>
            <p>Authentification sécurisée et gestion des rôles Admin/User.</p>
        </div>
        <div class="feature-card">
            <h3>Data en Temps Réel</h3>
            <p>Synchronisation instantanée de vos employés avec Pinia.</p>
        </div>
        <div class="feature-card">
            <h3>Interface Cloud</h3>
            <p>Accédez à vos ressources partout, tout le temps.</p>
        </div>
        </div>
    </div>
</template>

<style scoped>
    :root {
        --primary: #42b883; /* Vert Vue.js */
        --primary-dark: #35495e; /* Bleu Vue.js */
        --accent: #64748b;
        --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        --glass-bg: rgba(255, 255, 255, 0.8);
        --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .home-hero {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
        background: var(--bg-gradient);
        font-family: 'Inter', system-ui, sans-serif;
        color: #1e293b;
        text-align: center;
    }

    /* --- Contenu Principal --- */
    .hero-content {
        max-width: 800px;
        margin-bottom: 5rem;
    }

    .badge {
        background: rgba(66, 184, 131, 0.1);
        color: var(--primary);
        padding: 0.5rem 1rem;
        border-radius: 99px;
        font-weight: 600;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin: 1.5rem 0;
        color: var(--primary-dark);
    }

    h1 span {
        color: var(--primary);
        position: relative;
    }

    p {
        font-size: 1.25rem;
        color: var(--accent);
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto 2.5rem;
    }

    /* --- Boutons --- */
    .hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    button {
        padding: 0.8rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        border: none;
    }

    .btn-primary {
        background: var(--primary);
        color: var(--primary-dark);
        box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        background: #3aa675;
    }

    .btn-secondary {
        background: white;
        color: var(--primary-dark);
        border: 1px solid #e2e8f0;
    }

    .btn-secondary:hover {
        background: #f1f5f9;
    }

    /* --- Grille de Features --- */
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        width: 100%;
        max-width: 1100px;
    }

    .feature-card {
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: var(--shadow);
        transition: transform 0.3s ease;
        text-align: left;
    }

    .feature-card:hover {
        transform: translateY(-10px);
    }

    .feature-card h3 {
        color: var(--primary-dark);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    .feature-card p {
        font-size: 0.95rem;
        margin: 0;
        text-align: left;
    }

</style>