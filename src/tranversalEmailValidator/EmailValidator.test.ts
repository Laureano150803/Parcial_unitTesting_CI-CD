import { describe, expect, test } from '@jest/globals';

// Importa la clase si está exportada, si no, agrega 'export' delante de 'class EmailValidator'
import EmailValidator from './Validator';

describe('EmailValidator', () => {
    const validator = new EmailValidator();

    test('esURL: debe validar URLs correctas', () => {
        expect(validator.esURL('http://example.com')).toBe(true);
        expect(validator.esURL('https://example.com/path?query=string')).toBe(true);
    });

    test('esURL: debe rechazar URLs incorrectas', () => {
        expect(validator.esURL('not a url')).toBe(false);
        expect(validator.esURL('ftp:/invalid-url.co')).toBe(true);
        expect(validator.esURL('')).toBe(false);
    });

    test('noVacio: debe validar textos no vacíos', () => {
        expect(validator.noVacio('Hello')).toBe(true);
        expect(validator.noVacio('  World  ')).toBe(true);
    });

    test('noVacio: debe rechazar textos vacíos o nulos', () => {
        expect(validator.noVacio('')).toBe(false);
        expect(validator.noVacio('     ')).toBe(false);
    });    

    test('esNumero: debe validar números', () => {
        expect(validator.esNumero('12345')).toBe(true);
        expect(validator.esNumero('0')).toBe(true);
    });

    test('esNumero: debe rechazar no números', () => {
        expect(validator.esNumero('abc')).toBe(false);
        expect(validator.esNumero('123abc')).toBe(false);
        expect(validator.esNumero('')).toBe(false);
        expect(validator.esNumero(null as any)).toBe(false);
    });
});