webpackJsonp([20], {
  212: function(e, t, n) {
    'use strict';
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function a(r, o) {
            try {
              var i = t[r](o),
                c = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(c).then(
                function(e) {
                  a('next', e);
                },
                function(e) {
                  a('throw', e);
                }
              );
            e(c);
          }
          return a('next');
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {value: e, enumerable: !1, writable: !0, configurable: !0},
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', {value: !0});
    var c = n(59),
      s = n.n(c),
      u = n(0),
      l = n.n(u),
      p = n(58),
      f = n(19),
      d = n(368),
      m = n(266),
      y = n(243),
      h = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
      v = (function(e) {
        function t() {
          var e,
            n,
            i,
            c,
            u = this;
          r(this, t);
          for (var l = arguments.length, p = Array(l), f = 0; f < l; f++)
            p[f] = arguments[f];
          return (
            (n = i = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(p)
              )
            )),
            (i.state = {isLoading: !1, isLoaded: !1, isNotFound: !1, data: {}}),
            (i.load = a(
              s.a.mark(function e() {
                var t, n, a;
                return s.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            i.setState({isLoading: !0}),
                            (t = i.props.match.params.id),
                            (e.next = 5),
                            Object(d.d)(t)
                          );
                        case 5:
                          (n = e.sent),
                            (a = n.data),
                            i.setState({
                              isLoading: !1,
                              isNotFound: !1,
                              data: a,
                              isLoaded: !0,
                            }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            i.setState({isLoading: !1, isNotFound: !0});
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  u,
                  [[0, 10]]
                );
              })
            )),
            (c = n),
            o(i, c)
          );
        }
        return (
          i(t, e),
          h(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.load();
              },
            },
            {
              key: 'render',
              value: function() {
                if (!this.state.isLoaded)
                  return l.a.createElement(y.a, {show: !0});
                var e = this.props.match.params.id,
                  t = this.state.data,
                  n = t.name,
                  a = t.description,
                  r = t.status,
                  o = t.created_at,
                  i = t.updated_at;
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(m.a, {
                    previous: this.previous,
                    active: 'Service Information',
                  }),
                  l.a.createElement(
                    p.d,
                    null,
                    l.a.createElement(
                      p.e,
                      {className: 'position-relative'},
                      this.state.isNotFound && 'Page Not Found',
                      l.a.createElement(
                        p.m,
                        null,
                        l.a.createElement(
                          p.n,
                          null,
                          l.a.createElement(p.q, {for: 'Name'}, 'Name'),
                          l.a.createElement(p.p, {
                            type: 'text',
                            name: 'name',
                            id: 'name',
                            placeholder: 'Name',
                            required: !0,
                            defaultValue: n,
                            readOnly: !0,
                          })
                        ),
                        l.a.createElement(
                          p.n,
                          null,
                          l.a.createElement(
                            p.q,
                            {for: 'description'},
                            'Description'
                          ),
                          l.a.createElement(p.p, {
                            type: 'textarea',
                            name: 'description',
                            id: 'description',
                            required: !0,
                            defaultValue: a,
                            readOnly: !0,
                          })
                        ),
                        l.a.createElement(
                          p.n,
                          null,
                          l.a.createElement(p.q, {for: 'status'}, 'Status'),
                          l.a.createElement(p.p, {
                            type: 'text',
                            name: 'status',
                            id: 'status',
                            required: !0,
                            defaultValue: r,
                            readOnly: !0,
                          })
                        ),
                        l.a.createElement(
                          p.y,
                          null,
                          l.a.createElement(
                            p.g,
                            {md: 6},
                            l.a.createElement(
                              p.n,
                              null,
                              l.a.createElement(
                                p.q,
                                {for: 'created_at'},
                                'Created At'
                              ),
                              l.a.createElement(p.p, {
                                type: 'text',
                                name: 'created_at',
                                id: 'created_at',
                                required: !0,
                                defaultValue: o,
                                readOnly: !0,
                              })
                            )
                          ),
                          l.a.createElement(
                            p.g,
                            {md: 6},
                            l.a.createElement(
                              p.n,
                              null,
                              l.a.createElement(
                                p.q,
                                {for: 'updated_at'},
                                'Updated At'
                              ),
                              l.a.createElement(p.p, {
                                type: 'text',
                                name: 'updated_at',
                                id: 'updated_at',
                                required: !0,
                                defaultValue: i,
                                readOnly: !0,
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          {
                            to: '/services/' + e + '/edit',
                            className: 'btn btn-primary align-right',
                          },
                          'Edit Service'
                        )
                      )
                    )
                  )
                );
              },
            },
            {
              key: 'previous',
              get: function() {
                return [{to: '/services', label: 'Services'}];
              },
            },
          ]),
          t
        );
      })(l.a.Component);
    t.default = v;
  },
  243: function(e, t, n) {
    'use strict';
    var a = n(0),
      r = n.n(a),
      o = n(245),
      i = n.n(o);
    t.a = function(e) {
      return (
        e.show &&
        r.a.createElement(
          'div',
          {className: i.a.loader},
          r.a.createElement('i', {className: 'fa fa-spinner fa-spin'})
        )
      );
    };
  },
  245: function(e, t, n) {
    var a = n(246);
    'string' === typeof a && (a = [[e.i, a, '']]);
    var r = {hmr: !1};
    r.transform = void 0;
    n(205)(a, r);
    a.locals && (e.exports = a.locals);
  },
  246: function(e, t, n) {
    (t = e.exports = n(204)(!0)),
      t.push([
        e.i,
        '._1LOsUm0xjFudLrD4tvuDW5{position:absolute;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background:hsla(0,0%,100%,.2)}._1LOsUm0xjFudLrD4tvuDW5 i{font-size:24px}',
        '',
        {
          version: 3,
          sources: [
            'D:/Work/laragym/resources/apps/frontend/src/components/Loader/Loader.scss',
          ],
          names: [],
          mappings:
            'AAAA,yBAAgB,kBAAkB,MAAM,OAAO,oBAAoB,aAAa,sBAAsB,mBAAmB,qBAAqB,uBAAuB,WAAW,YAAY,6BAA+B,CAAC,2BAAkB,cAAc,CAAC',
          file: 'Loader.scss',
          sourcesContent: [
            ':local(.loader){position:absolute;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background:rgba(255,255,255,.2)}:local(.loader) i{font-size:24px}',
          ],
          sourceRoot: '',
        },
      ]),
      (t.locals = {loader: '_1LOsUm0xjFudLrD4tvuDW5'});
  },
  266: function(e, t, n) {
    'use strict';
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
    }
    function o(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {value: e, enumerable: !1, writable: !0, configurable: !0},
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = n(0),
      c = n.n(i),
      s = n(19),
      u = n(58),
      l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
      p = (function(e) {
        function t() {
          return (
            a(this, t),
            r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          o(t, e),
          l(t, [
            {
              key: 'render',
              value: function() {
                return c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(
                    u.a,
                    null,
                    this.props.previous.map(function(e) {
                      return c.a.createElement(
                        u.b,
                        {key: e.to},
                        c.a.createElement(s.a, {to: e.to}, e.label)
                      );
                    }),
                    c.a.createElement(u.b, {active: !0}, this.props.active)
                  )
                );
              },
            },
          ]),
          t
        );
      })(c.a.Component);
    (p.defaultProps = {previous: [], active: ''}), (t.a = p);
  },
  368: function(e, t, n) {
    'use strict';
    function a() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return u.a.get('/api/services', {params: e}).then(function(e) {
        return e.data;
      });
    }
    function r(e) {
      return u.a.get('/api/services/' + e).then(function(e) {
        return e.data;
      });
    }
    function o(e) {
      return u.a.delete('/api/services/' + e).then(function(e) {
        return e.data;
      });
    }
    function i(e) {
      return u.a.post('/api/services', e).then(function(e) {
        return e.data;
      });
    }
    function c(e, t) {
      return u.a.put('/api/services/' + e, t).then(function(e) {
        return e.data;
      });
    }
    (t.c = a), (t.d = r), (t.b = o), (t.a = i), (t.e = c);
    var s = n(32),
      u = n.n(s);
  },
});
//# sourceMappingURL=20.9c635298.chunk.js.map
