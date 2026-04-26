// Chargement du client Supabase via CDN
// La clé anon est sécurisée par les politiques RLS de Supabase
// L'accès admin est protégé par la vérification du rôle à la connexion

const SUPABASE_URL = 'https://vddyybcoanooyfexdypp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZHl5YmNvYW5vb3lmZXhkeXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzU5NzcsImV4cCI6MjA4OTQ1MTk3N30.AIObdRwPWK5_I8-8E81liKcpTw5G6AJJH1YIwSz6T2Y';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
