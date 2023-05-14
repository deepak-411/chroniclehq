(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [962], {
        2962: function(e, t, o) {
            "use strict";
            o.d(t, {
                PB: function() {
                    return s
                }
            });
            var a = o(7294),
                r = o(9008),
                n = o.n(r);

            function p() {
                return (p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = ["keyOverride"],
                l = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                h = function(e, t, o) {
                    void 0 === t && (t = []);
                    var r = void 0 === o ? {} : o,
                        n = r.defaultWidth,
                        p = r.defaultHeight;
                    return t.reduce(function(t, o, r) {
                        return t.push(a.createElement("meta", {
                            key: "og:" + e + ":0" + r,
                            property: "og:" + e,
                            content: o.url
                        })), o.alt && t.push(a.createElement("meta", {
                            key: "og:" + e + ":alt0" + r,
                            property: "og:" + e + ":alt",
                            content: o.alt
                        })), o.secureUrl && t.push(a.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + r,
                            property: "og:" + e + ":secure_url",
                            content: o.secureUrl.toString()
                        })), o.type && t.push(a.createElement("meta", {
                            key: "og:" + e + ":type0" + r,
                            property: "og:" + e + ":type",
                            content: o.type.toString()
                        })), o.width ? t.push(a.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: o.width.toString()
                        })) : n && t.push(a.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: n.toString()
                        })), o.height ? t.push(a.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: o.height.toString()
                        })) : p && t.push(a.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: p.toString()
                        })), t
                    }, [])
                },
                c = function(e) {
                    var t, o, r, n, c, d = [];
                    e.titleTemplate && (l.templateTitle = e.titleTemplate);
                    var s = "";
                    e.title ? (s = e.title, l.templateTitle && (s = l.templateTitle.replace(/%s/g, function() {
                        return s
                    }))) : e.defaultTitle && (s = e.defaultTitle), s && d.push(a.createElement("title", {
                        key: "title"
                    }, s));
                    var m = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
                        u = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
                        g = "";
                    if (e.robotsProps) {
                        var f = e.robotsProps,
                            y = f.nosnippet,
                            G = f.maxSnippet,
                            k = f.maxImagePreview,
                            v = f.maxVideoPreview,
                            E = f.noarchive,
                            b = f.noimageindex,
                            w = f.notranslate,
                            T = f.unavailableAfter;
                        g = (y ? ",nosnippet" : "") + (G ? ",max-snippet:" + G : "") + (k ? ",max-image-preview:" + k : "") + (E ? ",noarchive" : "") + (T ? ",unavailable_after:" + T : "") + (b ? ",noimageindex" : "") + (v ? ",max-video-preview:" + v : "") + (w ? ",notranslate" : "")
                    }
                    if (m || u ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0), d.push(a.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (m ? "noindex" : "index") + "," + (u ? "nofollow" : "follow") + g
                        }))) : d.push(a.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + g
                        })), e.description && d.push(a.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: e.description
                        })), e.themeColor && d.push(a.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: e.themeColor
                        })), e.mobileAlternate && d.push(a.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                            d.push(a.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }), e.twitter && (e.twitter.cardType && d.push(a.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: e.twitter.cardType
                        })), e.twitter.site && d.push(a.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: e.twitter.site
                        })), e.twitter.handle && d.push(a.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: e.twitter.handle
                        }))), e.facebook && e.facebook.appId && d.push(a.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: e.facebook.appId
                        })), (null != (t = e.openGraph) && t.title || s) && d.push(a.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (n = e.openGraph) ? void 0 : n.title) || s
                        })), (null != (o = e.openGraph) && o.description || e.description) && d.push(a.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (c = e.openGraph) ? void 0 : c.description) || e.description
                        })), e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && d.push(a.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var O = e.openGraph.type.toLowerCase();
                            d.push(a.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: O
                            })), "profile" === O && e.openGraph.profile ? (e.openGraph.profile.firstName && d.push(a.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && d.push(a.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && d.push(a.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && d.push(a.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === O && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && d.push(a.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && d.push(a.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === O && e.openGraph.article ? (e.openGraph.article.publishedTime && d.push(a.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && d.push(a.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && d.push(a.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && d.push(a.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === O || "video.episode" === O || "video.tv_show" === O || "video.other" === O) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                                e.profile && d.push(a.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && d.push(a.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && d.push(a.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && d.push(a.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                                d.push(a.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && d.push(a.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && d.push.apply(d, h("image", e.openGraph.images, {
                            defaultWidth: l.defaultOpenGraphImageWidth,
                            defaultHeight: l.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && d.push.apply(d, h("video", e.openGraph.videos, {
                            defaultWidth: l.defaultOpenGraphVideoWidth,
                            defaultHeight: l.defaultOpenGraphVideoHeight
                        })), e.openGraph.audio && d.push.apply(d, h("audio", e.openGraph.audio)), e.openGraph.locale && d.push(a.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), (e.openGraph.siteName || e.openGraph.site_name) && d.push(a.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.siteName || e.openGraph.site_name
                        }))
                    }
                    return e.canonical && d.push(a.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                        var t, o, r = e.keyOverride,
                            n = function(e, t) {
                                if (null == e) return {};
                                var o, a, r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) o = n[a], t.indexOf(o) >= 0 || (r[o] = e[o]);
                                return r
                            }(e, i);
                        d.push(a.createElement("meta", p({
                            key: "meta:" + (null != (t = null != (o = null != r ? r : n.name) ? o : n.property) ? t : n.httpEquiv)
                        }, n)))
                    }), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach(function(e) {
                        var t;
                        d.push(a.createElement("link", p({
                            key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                        }, e)))
                    }), d
                },
                d = function(e) {
                    return a.createElement(n(), null, c(e))
                },
                s = function(e) {
                    var t = e.title,
                        o = e.themeColor,
                        r = e.noindex,
                        n = void 0 !== r && r,
                        p = e.nofollow,
                        i = e.robotsProps,
                        l = e.description,
                        h = e.canonical,
                        s = e.openGraph,
                        m = e.facebook,
                        u = e.twitter,
                        g = e.additionalMetaTags,
                        f = e.titleTemplate,
                        y = e.defaultTitle,
                        G = e.mobileAlternate,
                        k = e.languageAlternates,
                        v = e.additionalLinkTags,
                        E = e.useAppDir;
                    return a.createElement(a.Fragment, null, void 0 !== E && E ? c({
                        title: t,
                        themeColor: o,
                        noindex: n,
                        nofollow: p,
                        robotsProps: i,
                        description: l,
                        canonical: h,
                        facebook: m,
                        openGraph: s,
                        additionalMetaTags: g,
                        twitter: u,
                        titleTemplate: f,
                        defaultTitle: y,
                        mobileAlternate: G,
                        languageAlternates: k,
                        additionalLinkTags: v
                    }) : a.createElement(d, {
                        title: t,
                        themeColor: o,
                        noindex: n,
                        nofollow: p,
                        robotsProps: i,
                        description: l,
                        canonical: h,
                        facebook: m,
                        openGraph: s,
                        additionalMetaTags: g,
                        twitter: u,
                        titleTemplate: f,
                        defaultTitle: y,
                        mobileAlternate: G,
                        languageAlternates: k,
                        additionalLinkTags: v
                    }))
                };
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g")
        },
        9008: function(e, t, o) {
            e.exports = o(3121)
        }
    }
]);