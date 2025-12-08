"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Calendar, Tag } from "lucide-react";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

interface BlogContentProps {
  articles: BlogArticle[];
  categories: string[];
}

export function BlogContent({ articles, categories }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous les articles");

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "Tous les articles"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      {/* Categories Filter */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-center gap-3 flex-wrap animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-background-secondary text-text-secondary hover:bg-background-tertiary hover:text-white border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles - Large Cards */}
      {featuredArticles.length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Articles Phares</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>Lire l'article</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Third Featured Article - Full Width */}
            {featuredArticles[2] && (
              <Link
                href={`/blog/${featuredArticles[2].id}`}
                className="group mt-6 md:mt-8 flex flex-col md:flex-row bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-primary/50 z-10"></div>
                  <Image
                    src={featuredArticles[2].image}
                    alt={featuredArticles[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white">
                      <Tag className="w-3 h-3" />
                      {featuredArticles[2].category}
                    </span>
                  </div>
                </div>

                <div className="md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {featuredArticles[2].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredArticles[2].readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredArticles[2].title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    {featuredArticles[2].excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    <span>Lire l'article complet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Tous les Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-white">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-text-secondary text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>Lire plus</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results Message */}
      {filteredArticles.length === 0 && (
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="text-center py-16">
              <p className="text-xl text-text-secondary">
                Aucun article trouvé dans cette catégorie.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
