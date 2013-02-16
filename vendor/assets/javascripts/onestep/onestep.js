(function(exports) {
  var disabler = {
    // Disable an <a/> tag.
    disableLink: function(e) {
      return this.each(function() {
        return $(this).addClass('disabled').on('click', false);
      });
    },
    // Disable a <form/> tag to prevent submission.
    disableForm: function(e) {
      return this.each(function() {
        return $(this).find('input[type="submit"]').attr('disabled', 'disabled').addClass('disabled');
      });
    },
    // Re-enable an <a/> tag.
    enableLink: function() {
      return this.each(function() {
        return $(this).removeClass('disabled').off('click', false);
      });
    },
    // Re-enable a <form/> tag.
    enableForm: function(e, xhr, textStatus) {
      return this.each(function() {
        return $(this).find('input[type="submit"]').removeAttr('disabled').removeClass('disabled');
      });
    }
  };

  jQuery.fn.onestep = function() {
    return this.each(function() {
      var $this,
        _this = this;
      $this = $(this);
      if ($this.is('a')) {
        $this.on('ajax:complete', function() {
          return disabler.enableLink.apply($this);
        });
        if ($this.hasClass('disabled')) {
          return disabler.disableLink.apply($this);
        } else {
          return $this.on('ajax:beforeSend', function() {
            return disabler.disableLink.apply($this);
          });
        }
      } else if ($this.is('form')) {
        $this.on('ajax:complete', function() {
          return disabler.enableForm.apply($this);
        });
        return $this.submit(function() {
          return disabler.disableForm.apply($this);
        });
      }
    });
  };
})(window);
