(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7357],
  {
    24546: function (e, t, i) {
      "use strict";
      var r = i(37726),
        n = (i(2784), i(52322));
      t.Z = (e) => {
        var { textbookExercise: t } = e,
          { t: i } = (0, r.Z)(),
          o = ((e, t) => {
            var i;
            return null !== (i = e.sectionName) && void 0 !== i && i.length
              ? t("explanations.textbook_exercise.page_info_section", {
                  chapterNumber: e.chapterName,
                  sectionNumber: e.sectionName,
                  pageNumber: e.pageNumber,
                })
              : t("explanations.textbook_exercise.page_info", {
                  chapterNumber: e.chapterName,
                  pageNumber: e.pageNumber,
                });
          })(t, i);
        return (0, n.jsx)("div", { children: o });
      };
    },
    45198: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return be;
          },
          default: function () {
            return me;
          },
        });
      var r = i.p + "static/media/og_thumbnail_quizlet.d6daf5d9.png",
        n = i(97729),
        o = i.n(n),
        s = i(2784),
        a = i(52322),
        l = (e) => {
          var { pageTitle: t, imageUrl: i, exerciseUrl: r } = e;
          return (0, a.jsxs)(o(), {
            children: [
              (0, a.jsx)("meta", { content: t, property: "og:title" }),
              (0, a.jsx)("meta", {
                content: "Quizlet",
                property: "og:site_name",
              }),
              (0, a.jsx)("meta", { content: i, property: "og:image" }),
              (0, a.jsx)("meta", { content: r, property: "og:url" }),
            ],
          });
        },
        c = i(56246),
        d = i(65094),
        u = i(64873),
        x = i(55811),
        p = i(56353),
        b = i(6576),
        h = i(66057),
        m = i(47583),
        g = i(6636),
        E = i(79776),
        v = i(29263),
        _ = i(15215),
        O = i(82571),
        j = i(75644),
        f = i(2305),
        w = i(95235),
        T = i(61315),
        k = i(85296),
        S = i(89840),
        C = i(1524),
        y = i(54201),
        Z = i(54328),
        N = i(26056),
        I = i(88300),
        P = i(93892),
        X = i(20406),
        U = i(82269),
        L = i(24697),
        B = i(49768),
        M = i(18125),
        A = i(37726),
        R = ["exercise", "textbook"];
      function D(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(i), !0).forEach(function (t) {
                (0, w.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : D(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var K = (e) => {
          var { exercise: t, textbook: i } = e,
            r = (0, U.Z)(e, R),
            { t: n } = (0, A.Z)(),
            { logPageAction: o } = (0, b.wL)(),
            { 0: l, 1: c } = (0, s.useState)(!1),
            { 0: d, 1: u } = (0, s.useState)(r.tableOfContents),
            { 0: x, 1: p } = (0, s.useState)(null),
            { 0: h, 1: m } = (0, s.useState)(null),
            g = (function () {
              var e = (0, X.Z)(function* () {
                if (
                  (o(P.ZC.TEXTBOOK_EXERCISE_CLICK_TOC_MENU_BUTTON, {
                    textbook_id: i.id,
                    textbook_isbn: i.isbn,
                  }),
                  !d)
                ) {
                  var e = yield (0, M.JO)(i);
                  if (e) u(e);
                  else {
                    var r = yield (0, M.UT)(i, t.chapterName);
                    r
                      ? (p(r.previousChapterName),
                        m(r.nextChapterName),
                        u([r.chapter]))
                      : (0, L.fz)({
                          text: n("explanations.errors.request_failed"),
                          customToastId: (0, L.$G)("explanationsTOCMenuError"),
                          includeDismiss: !0,
                          includeEllipsis: !1,
                        });
                  }
                }
                c(!l);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            E = {
              onClick: () => setTimeout(() => g(), 0),
              size: "medium",
              text: n("explanations.table_of_contents.label"),
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(k.ZP, F({}, E)),
              d &&
                (0, a.jsx)(B.Z, {
                  exercise: t,
                  includeChapterNavigation: !0,
                  isModalOpen: l,
                  nextChapterName: h,
                  onModalClose: () => c(!1),
                  previousChapterName: x,
                  shouldRenderInModal: !0,
                  textbook: i,
                  textbookTableOfContents: d,
                }),
            ],
          });
        },
        z = i(24546);
      function q(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(i), !0).forEach(function (t) {
                (0, w.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : q(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var J = (0, T.Z)("section")({ name: "Container", class: "c1az1ccb" }),
        W = (0, T.Z)("div")({ name: "TitleWrapper", class: "twcg87l" }),
        Y = "d1ry6gqw",
        Q = (0, T.Z)("div")({ name: "Title", class: "t15zfihx" }),
        V = (0, T.Z)("div")({
          name: "TextbookExercisePageInfoWrapper",
          class: "to5kbh1",
        }),
        G = (0, T.Z)("div")({ name: "TextbookTitle", class: "tgk5emi" }),
        $ = (0, T.Z)("div")({ name: "TextbookDetails", class: "t18dv8j6" }),
        ee = (0, T.Z)("div")({ name: "TextbookInfo", class: "tb3hrve" }),
        te = (0, T.Z)("div")({ name: "ImageWrapper", class: "i1l6atir" }),
        ie = (0, T.Z)("div")({ name: "BadgeWrapper", class: "bw0qh88" });
      function re(e) {
        var {
            tableOfContents: t,
            textbook: i,
            exercise: r,
            showActions: n = !0,
            selectedSolution: o,
            shouldShowPremiumBrandingBadge: s = !0,
            solutionsLength: l,
          } = e,
          { t: c } = (0, A.Z)(),
          d = i._webUrl,
          u = (0, a.jsx)(K, { exercise: r, tableOfContents: t, textbook: i });
        return (0, a.jsxs)(J, {
          children: [
            (0, a.jsxs)(W, {
              className: Y,
              "data-testid": "TextbookExerciseTitle",
              children: [
                (0, a.jsxs)(Q, {
                  children: [
                    (0, a.jsx)(S.H4, {
                      children: c("explanations.textbook_exercise.header", {
                        exerciseNumber: r.exerciseName,
                      }),
                    }),
                    (0, a.jsx)(V, {
                      children: (0, a.jsx)(z.Z, {
                        textbookExercise: H(H({}, r), {}, { textbook: i }),
                      }),
                    }),
                  ],
                }),
                n &&
                  (0, a.jsx)(Z.Z, {
                    exercise: r,
                    selectedSolution: o,
                    solutionsLength: l,
                    textbook: i,
                  }),
              ],
            }),
            (0, a.jsxs)($, {
              className: Y,
              children: [
                (0, a.jsxs)(te, {
                  children: [
                    (0, a.jsx)(I.Z, {
                      onError: () => {
                        (0, C.cZ)(P.mU, {
                          body: {
                            content_url: encodeURI(window.location.href),
                            feedback_content: N.J.TEXTBOOK_THUMBNAIL_ERROR,
                            isbn: i.isbn,
                          },
                        });
                      },
                      textbook: i,
                    }),
                    s &&
                      i.isPremium &&
                      (0, a.jsx)(ie, {
                        children: (0, a.jsx)(y.ZP, {
                          logActionName:
                            "exercise_header_premium_branding_badge_view",
                        }),
                      }),
                  ],
                }),
                (0, a.jsxs)(ee, {
                  children: [
                    (0, a.jsx)(G, {
                      children: (0, a.jsx)(k.ZP, {
                        ariaLabel: i.title,
                        linkTo: d,
                        size: "small",
                        text: i.title,
                        variant: k.U_.Secondary,
                      }),
                    }),
                    (0, a.jsx)("span", {
                      children: c("explanations.textbook_exercise.isbn", {
                        isbn: i.isbn,
                      }),
                    }),
                    u,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      i(86055);
      var ne = i(27225),
        oe = i(23464),
        se = i(70262),
        ae = i(66366),
        le = i(59585);
      function ce(e, t, i, r) {
        var { t: n } = (0, A.Z)(),
          { logPageAction: o } = (0, b.wL)();
        if (null !== e) {
          return {
            label: n("explanations.textbook_exercise.header", {
              exerciseNumber: e.exerciseName,
            }),
            onClick: () => {
              var n =
                t === f.w.PREVIOUS
                  ? P.ZC.TEXTBOOK_EXERCISE_CLICK_PREVIOUS
                  : P.ZC.TEXTBOOK_EXERCISE_CLICK_NEXT;
              o(n, {
                textbook_id: r,
                textbook_isbn: i,
                target_exercise_id: e.id,
              });
            },
            url: e._webUrl,
          };
        }
      }
      var de = i(40750),
        ue = i.n(de),
        xe = (e) => {
          var {
              exercise: t,
              isMetered: i,
              meteringMeta: r,
              pricing: n,
              shouldHideFirstStep: o,
              shouldShowAds: l,
              textbook: c,
              paywalledSectionClass: d,
              isContentLimited: u,
              chapterTOC: w,
            } = e,
            { t: T } = (0, A.Z)(),
            { logPageAction: k } = (0, b.wL)(),
            S = (0, s.useContext)(m.Z),
            C = (0, h.aM)(),
            y =
              !i &&
              (null === S || void 0 === S ? void 0 : S.type) !== x.XsQ.PLUS,
            Z = (0, ne.WE)(c, T, k);
          (0, s.useEffect)(() => {
            t.mediaExerciseId &&
              S &&
              (0, oe.Z)({
                personId: S.id,
                itemType: x.BYJ.TEXTBOOK_EXERCISE,
                itemId: t.mediaExerciseId,
              });
          }, [S, t.mediaExerciseId]);
          var N = null !== r && r.numEvents > r.threshold,
            I = !u && (!N || t.solutions.length > 0),
            P = (0, ae.Z)(t.solutions, T),
            X = (0, se.Z)(P, C),
            { 0: U, 1: L } = (0, s.useState)(X),
            B = ce(
              t.nextExercises.length > 0 ? t.nextExercises[0] : null,
              f.w.NEXT,
              c.isbn,
              c.id
            ),
            M = ce(
              t.previousExercises.length > 0 ? t.previousExercises[0] : null,
              f.w.PREVIOUS,
              c.isbn,
              c.id
            ),
            R = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(E.Z, {
                  badgeLogActionName:
                    "exercise_header_premium_branding_badge_view",
                  meteringMeta: r,
                  modelId: t.mediaExerciseId,
                  modelType: x.BYJ.TEXTBOOK_EXERCISE,
                  textbook: c,
                }),
                (0, a.jsx)(re, {
                  exercise: t,
                  selectedSolution: U,
                  shouldShowPremiumBrandingBadge: !1,
                  showActions: !!S,
                  solutionsLength: P.length,
                  textbook: c,
                }),
              ],
            }),
            D = () => {
              var e,
                i,
                o = ue()(n, "Pricing should be available when the paywall is."),
                s = !(null === n || void 0 === n || !n.discount);
              return (0, a.jsx)(_.Z, {
                isTeacherUser:
                  null !==
                    (e =
                      (null === S || void 0 === S
                        ? void 0
                        : S.selfIdentifiedTeacherStatus) === x.IXc.TEACHER) &&
                  void 0 !== e &&
                  e,
                isUserEligibleForFreeTrial:
                  null !==
                    (i =
                      (null === S || void 0 === S
                        ? void 0
                        : S._isEligibleForFreeTrial) && !s) &&
                  void 0 !== i &&
                  i,
                meteringMeta: r,
                modelId: t.mediaExerciseId,
                modelType: x.BYJ.TEXTBOOK_EXERCISE,
                pricing: o,
                shouldShowAds: l,
                shouldUseOverlay: I,
              });
            },
            F = () =>
              (0, a.jsx)(j.Z, {
                concepts: t.concepts,
                isMetered: i,
                modelId: t.id,
                modelType: x.BYJ.TEXTBOOK_EXERCISE,
                nextNavigationLink: B,
                onSwitchTab: (e) => L(e),
                paywall: N ? D() : void 0,
                previousNavigationLink: M,
                selectedSolution: ue()(U),
                shouldHideFirstStep: o,
                shouldShowAds: l && (!N || y),
                solutions: P,
                url: t._webUrl,
              });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (null === w || void 0 === w ? void 0 : w.children) &&
                (0, le.C)(w.children, T),
              (0, a.jsxs)(v.Z, {
                breadcrumbs: Z,
                header: R,
                isContentLimited: u,
                shouldShowAds: l,
                sidebarAdUnit: p.h.EXPLANATIONS_EXERCISE_SIDEBAR,
                children: [
                  (0, a.jsx)("div", {
                    className: d,
                    children: u
                      ? (0, a.jsx)(g.Z, {})
                      : N
                      ? (0, a.jsx)(a.Fragment, { children: I ? F() : D() })
                      : I
                      ? F()
                      : null,
                  }),
                  (0, a.jsx)(O.Z, {
                    isMetered: i,
                    isQuestion: !1,
                    meteringMeta: r,
                    modelId: t.mediaExerciseId,
                    modelType: x.BYJ.TEXTBOOK_EXERCISE,
                    textbook: c,
                  }),
                ],
              }),
            ],
          });
        },
        pe = i(75364),
        be = (i(34406), !0),
        he = (e) => {
          var {
            exercise: t,
            jsonLdMarkup: i,
            isMetered: n,
            metaTitle: o,
            metaDescription: s,
            meteringMeta: u,
            paywalledSectionClass: x,
            pricing: p,
            textbook: b,
            shouldHideFirstStep: h,
            shouldShowAds: m,
            isContentLimited: g,
            chapterTOC: E,
          } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d.Z, {
                metaDescription: s,
                metaTitle: o,
                urlCanonical: t._webUrl,
              }),
              (0, a.jsx)(l, {
                exerciseUrl: t._webUrl,
                imageUrl: "https://".concat(window.location.hostname).concat(r),
                pageTitle: (0, pe.p)(o),
              }),
              (0, a.jsx)(c.Z, { jsonLdMarkup: i }),
              (0, a.jsx)("div", {
                className: "ExerciseDetailPage",
                children: (0, a.jsx)(xe, {
                  chapterTOC: E,
                  exercise: t,
                  isContentLimited: g,
                  isMetered: n,
                  meteringMeta: u,
                  paywalledSectionClass: x,
                  pricing: p,
                  shouldHideFirstStep: h,
                  shouldShowAds: m,
                  textbook: b,
                }),
              }),
            ],
          });
        };
      (he.getLayout = function (e) {
        return (0, a.jsx)(u.Z, { children: e });
      }),
        (he.ownershipDomain = x.leh.Explanations),
        (he.actionString = "Explanations/textbookExercise");
      var me = he;
    },
    93078: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/explanations/textbook-solutions/[textbookSlug]/[exerciseSlug]",
        function () {
          return i(45198);
        },
      ]);
    },
    86055: function (e) {
      e.exports = {
        c1az1ccb: "c1az1ccb",
        twcg87l: "twcg87l",
        d1ry6gqw: "d1ry6gqw",
        to5kbh1: "to5kbh1",
        tgk5emi: "tgk5emi",
        t18dv8j6: "t18dv8j6",
        tb3hrve: "tb3hrve",
        i1l6atir: "i1l6atir",
        bw0qh88: "bw0qh88",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [6136, 7149, 6074, 9514, 8148, 6364, 3633, 446, 9768, 9774, 2888, 179],
      function () {
        return (t = 93078), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
