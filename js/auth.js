// Vérifier si l'utilisateur est connecté
async function checkAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session?.user || null;
}

// Rediriger vers login si non connecté
async function requireAuth() {
  const user = await checkAuth();
  if (!user) {
    window.location.href = 'index.html';
    return;
  }

  // Afficher l'email dans la sidebar
  const emailEl = document.getElementById('user-email');
  if (emailEl) emailEl.textContent = user.email;

  return user;
}

// Déconnexion
async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}
