'use client';

import { useState } from 'react';
import Link from 'next/link';

export function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ระบบบริการสุขภาพ</h1>
                <p className="text-xs text-gray-500">จังหวัดเชียงราย</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/dashboard" 
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              แดชบอร์ด
            </Link>
            <Link 
              href="/hospitals" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              โรงพยาบาล
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              บริการ
            </Link>
            <Link 
              href="/reports" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              รายงาน
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">ผู้ดูแล</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/dashboard" 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors px-2 py-1"
              >
                แดชบอร์ด
              </Link>
              <Link 
                href="/hospitals" 
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              >
                โรงพยาบาล
              </Link>
              <Link 
                href="/services" 
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              >
                บริการ
              </Link>
              <Link 
                href="/reports" 
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
              >
                รายงาน
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
