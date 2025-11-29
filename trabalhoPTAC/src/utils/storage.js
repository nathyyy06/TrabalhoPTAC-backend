export function salvar(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function carregar(key, defaultValue = []) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function adicionar(key, novoItem) {
  const lista = carregar(key, []);
  lista.push(novoItem);
  salvar(key, lista);
}

export function atualizar(key, id, novosDados) {
  let lista = carregar(key, []);
  lista = lista.map(item =>
    item.id === id ? { ...item, ...novosDados } : item
  );
  salvar(key, lista);
}

export function remover(key, id) {
  let lista = carregar(key, []);
  lista = lista.filter(item => item.id !== id);
  salvar(key, lista);
}
