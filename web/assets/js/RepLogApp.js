(function() {
    var RepLogApp = {
        initialize:              function ($wrapper) {
            this.$wrapper = $wrapper;
            Helper.initialize($wrapper);
            this.$wrapper.find('.js-delete-rep-log').on('click', this.handleRepLogDelete.bind(this));
            this.$wrapper.find('tbody tr').on('click', this.handleRowClick.bind(this));
        },
        updateTotalWeightLifted: function () {
            this.$wrapper.find('.js-total-weight').html(Helper.calculateTotalWeight());
        },
        handleRepLogDelete:      function (e) {
            e.preventDefault();
            var $link = $(e.currentTarget);
            $link.addClass('text-danger');
            $link.find('.fa')
                .removeClass('fa-trash')
                .addClass('fa-spinner')
                .addClass('fa-spin');
            /** Ссылка на API для удаленя записи из БД */
            var deleteUrl = $link.data('url');
            /** Строка по которой был произведён клил */
            var $row      = $link.closest('tr');
            var self      = this;
            $.ajax({
                url:     deleteUrl,
                method:  'DELETE',
                success: function () {
                    $row.fadeOut('normal', function () {
                        $(this).remove();
                        self.updateTotalWeightLifted();
                    });
                }
            })
        },
        handleRowClick:          function () {
            console.log('row clicked');
        },

    };

    /**
     * Объект для хранения приватных методов RepLogApp.
     * Мы не можем сделать методы приватными, но межем сделать переменные,
     * используя область видимости
     */
    var Helper = {
        initialize:           function ($wrapper) {
            this.$wrapper = $wrapper;
        },
        calculateTotalWeight: function () {
            var totalWeight = 0;

            this.$wrapper.find('tbody tr').each(function () {
                totalWeight += $(this).data('weight')
            });

            return totalWeight;
        },
    }
})()
