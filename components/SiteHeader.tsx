'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos', hasSubmenu: true },
    { href: '/industrias', label: 'Industrias' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/certificaciones', label: 'Certificaciones' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const submenuItems = [
    { href: '/productos/tarimas', label: 'Tarimas' },
    { href: '/productos/cajas-agricolas', label: 'Cajas Agrícolas' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              JACS <span className="text-gray-charcoal">Plastics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className="text-gray-charcoal hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-ui opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {submenuItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-charcoal hover:text-primary hover:bg-gray-ui transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-charcoal hover:text-primary transition-colors duration-200"
              >
                <span className="uppercase font-medium">ES</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-ui"
                  >
                    <div className="py-2">
                      <Link
                        href="/es"
                        className="block px-4 py-2 text-gray-charcoal hover:text-primary hover:bg-gray-ui transition-colors duration-200"
                        onClick={() => setIsLangOpen(false)}
                      >
                        ES
                      </Link>
                      <Link
                        href="/en"
                        className="block px-4 py-2 text-gray-charcoal hover:text-primary hover:bg-gray-ui transition-colors duration-200"
                        onClick={() => setIsLangOpen(false)}
                      >
                        EN
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contacto"
              className="btn-primary"
            >
              Cotiza ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-charcoal hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-ui"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-gray-charcoal hover:text-primary transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasSubmenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {submenuItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-gray-charcoal hover:text-primary transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="flex space-x-4 pt-4 border-t border-gray-ui">
                  <Link
                    href="/es"
                    className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 bg-primary text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ES
                  </Link>
                  <Link
                    href="/en"
                    className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-gray-charcoal hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EN
                  </Link>
                </div>

                {/* Mobile CTA Button */}
                <Link
                  href="/contacto"
                  className="block w-full btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cotiza ahora
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
