webpackJsonp([26], {
  208: function(e, t, n) {
    'use strict';
    function r(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function r(a, o) {
            try {
              var i = t[a](o),
                c = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(c).then(
                function(e) {
                  r('next', e);
                },
                function(e) {
                  r('throw', e);
                }
              );
            e(c);
          }
          return r('next');
        });
      };
    }
    function a(e, t) {
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
      l = n.n(c),
      s = n(0),
      u = n.n(s),
      f = n(19),
      m = n(58),
      p = n(71),
      d = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      h = (function(e) {
        function t() {
          var e,
            n,
            i,
            c,
            s = this;
          a(this, t);
          for (var u = arguments.length, f = Array(u), m = 0; m < u; m++)
            f[m] = arguments[m];
          return (
            (n = i = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(f)
              )
            )),
            (i.state = {isLoading: !1}),
            (i.isStillMounted = !1),
            (i.onSubmit = (function() {
              var e = r(
                l.a.mark(function e(t) {
                  return l.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              i.setState({isLoading: !0}),
                              (e.next = 4),
                              i.props.forgot({email: i.email.value})
                            );
                          case 4:
                            i.isStillMounted && i.setState({isLoading: !1});
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    s
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })()),
            (c = n),
            o(i, c)
          );
        }
        return (
          i(t, e),
          d(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.isStillMounted = !0;
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.isStillMounted = !1;
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this;
                return u.a.createElement(
                  'div',
                  {className: 'card card-login mx-auto mt-5'},
                  u.a.createElement(
                    'div',
                    {className: 'card-header text-center'},
                    'Forgot Password'
                  ),
                  u.a.createElement(
                    'div',
                    {className: 'card-body'},
                    u.a.createElement(
                      m.m,
                      {onSubmit: this.onSubmit},
                      u.a.createElement(
                        m.n,
                        null,
                        u.a.createElement(
                          'div',
                          {className: 'form-label-group'},
                          u.a.createElement(m.p, {
                            innerRef: function(t) {
                              return (e.email = t);
                            },
                            type: 'email',
                            id: 'inputEmail',
                            className: 'form-control',
                            placeholder: 'Email address',
                            autoFocus: !0,
                            disabled: this.state.isLoading,
                          }),
                          u.a.createElement(
                            m.q,
                            {for: 'inputEmail'},
                            'Email address'
                          )
                        )
                      ),
                      u.a.createElement(
                        m.c,
                        {
                          disabled: this.state.isLoading,
                          size: 'lg',
                          color: 'primary',
                          block: !0,
                        },
                        this.state.isLoading ? 'Please Wait...' : 'Recover'
                      )
                    ),
                    u.a.createElement(
                      'div',
                      {className: 'text-center mt-3'},
                      u.a.createElement(
                        f.a,
                        {to: '/auth/login', className: 'd-block small'},
                        'Back To Login'
                      )
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(s.Component);
    t.default = Object(p.a)(h);
  },
});
//# sourceMappingURL=26.1795ec14.chunk.js.map
