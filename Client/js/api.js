const Api = (() => {
  const cache = new Map();

  async function request(path, options = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    let body = null;
    try {
      body = await res.json();
    } catch (_) {}

    if (!res.ok) {
      const message =
        (body && (body.message || body.error)) ||
        `Request failed (${res.status})`;
      throw new Error(message);
    }
    return body;
  }

  async function list(moduleKey, { force = false } = {}) {
    const cfg = MODULES[moduleKey];
    if (!force && cache.has(moduleKey)) return cache.get(moduleKey);
    const data = await request(`/${cfg.endpoint}`);
    const rows = Array.isArray(data) ? data : [];
    cache.set(moduleKey, rows);
    return rows;
  }

  function invalidate(moduleKey) {
    cache.delete(moduleKey);
  }

  function invalidateAll() {
    cache.clear();
  }

  async function create(moduleKey, payload) {
    const cfg = MODULES[moduleKey];
    const result = await request(`/${cfg.endpoint}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    invalidate(moduleKey);
    return result;
  }

  async function update(moduleKey, id, payload) {
    const cfg = MODULES[moduleKey];
    const result = await request(`/${cfg.endpoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
    invalidate(moduleKey);
    return result;
  }

  async function remove(moduleKey, id) {
    const cfg = MODULES[moduleKey];
    const result = await request(`/${cfg.endpoint}/${id}`, {
      method: 'DELETE',
    });
    invalidate(moduleKey);
    return result;
  }

  async function checkConnection() {
    try {
      await request('/hotels');
      return true;
    } catch (_) {
      return false;
    }
  }

  return {
    list,
    create,
    update,
    remove,
    invalidate,
    invalidateAll,
    checkConnection,
  };
})();
