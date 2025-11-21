class Validator {
    esURL(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    public esNumero(texto: string): boolean {
        if (texto == null) return false;
        return /^\d+$/.test(texto);
    }

    noVacio(texto: string): boolean {
        return texto != null && texto.trim().length > 0;
    }
}

export default Validator;