var SETTINGS = {
	// <<<-
	image: {
		/*title: function(element, id) {
		 var field = SAVER.getFieldBy('id', id);
		 SETTINGS.openSettings(element, {
		 id: id,
		 type: 'image',
		 toplink: 1,
		 title: loc["Настройки"],
		 titleSwitcher: field.titleSwitcher,
		 });
		 },*/
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'image',
				toplink: 3,
				title: loc["Настройки"],
				title_settings: field.title,
			}, SETTINGS.sliderBuild);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'image',
				toplink: 2,
				title: loc["Структура и отступы"],
				paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	text: {
		/*title: function(element, id) {
		 var field = SAVER.getFieldBy('id', id);
		 SETTINGS.openSettings(element, {
		 id: id,
		 type: 'text',
		 toplink: 1,
		 title: loc["Настройки"],
		 titleSwitcher: field.titleSwitcher,
		 descSwitcher: field.descSwitcher
		 });
		 },*/
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'text',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	input_text: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_text',
				toplink: 4,
				title: loc["Настройки"],
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher,
				importantSwitcher: field.importantSwitcher,
				tooltip: field.tooltip
			});
		},
		switchField: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_text',
				toplink: 3,
				title: loc["Тип поля"],
				typeChange: field.typeChange,
			}, SETTINGS.sliderBuild, SETTINGS.checkType);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_text',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	selector: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'selector',
				toplink: 4,
				title: loc["Настройки"],
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher
			});
		},
		pointsCount: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'selector',
				toplink: 3,
				title: loc["Пункты"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.selector.addNew(\'selector\','+id+', this)"></a>'
			}, FIELDS.selector.scrollbarBuild);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'selector',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	slider: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'slider',
				toplink: 3,
				title: loc["Настройки"],
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher,
				rangeSwitcher: field.rangeSwitcher,
				min: field.min,
				max: field.max,
				step: field.step
			}, SETTINGS.stepBuild);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'slider',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	input_checkbox: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_checkbox',
				toplink: 4,
				title: loc["Настройки"],
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher
			});
		},
		pointsCount: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_checkbox',
				toplink: 3,
				title: loc["Пункты"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.input_checkbox.addNew(\'input_checkbox\','+id+', this)"></a>'
			}, FIELDS.selector.scrollbarBuild);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_checkbox',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	input_radio: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_radio',
				toplink: 4,
				title: loc["Настройки"],
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher
			});
		},
		pointsCount: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_radio',
				toplink: 3,
				title: loc["Пункты"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.input_radio.addNew(\'input_radio\','+id+', this)"></a>'
			}, FIELDS.selector.scrollbarBuild);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'input_radio',
				toplink: 2,
				title: loc["Отступы"],
				//paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	html_code: {
		code: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openCodeEditor(field);
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'html_code',
				toplink: 2,
				title: loc["Отступы"],
				paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom
			}, SETTINGS.sliderBuild);
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	map: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: loc["Настройки"],
				action: "mapSettings",
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
			});
		},

		mapInclude: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Содержимое"],
				action: "mapInclude",
				titleSwitcher: field.titleSwitcher,
				descSwitcher: field.descSwitcher,
				toSwitcher: field.toSwitcher,
				fromSwitcher: field.fromSwitcher,
				mapSwitcher: field.mapSwitcher,
				placeSwitcher: field.placeSwitcher,
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
			});
		},

		mapType: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Карта"],
				action: "mapType",
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
			}, function() {
				SETTINGS.checkRadio(element, id, 'typeChange');
			});
		},

		mapPoints: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Мультимаршрут"],
				action: "mapPoints",
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
				SETTINGS.sliderBuild(element, id);;
			});
		},

		mapLimits: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Ограничения"],
				action: "mapLimits",
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
			});
		},

		mapLimCity: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				typeOpt: 'cities',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="mapLimits"></a>' + loc["Доступные города"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.map.addNew(\'cities\','+id+', this)"></a>'
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				
				FIELDS.selector.scrollbarBuild(tooltip);
				SETTINGS.tooltipLinks(element, id);
			});
		},

		mapLimCountry: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				typeOpt: 'countries',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="mapLimits"></a>' + loc["Доступные страны"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.map.addNew(\'countries\','+id+', this)"></a>'
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				
				FIELDS.selector.scrollbarBuild(tooltip);
				SETTINGS.tooltipLinks(element, id);
			});
		},

		mapLimDistance: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="mapLimits"></a>' + loc["Доступные расстояния"],
				minDistance: field.minDistance,
				maxDistance: field.maxDistance,
				action: 'mapLimDistance'
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				
				SETTINGS.tooltipLinks(element, id);

				tooltip.find('input').on('input', function() {
					var $this = $(this),
						prop = $this.attr('data-prop'),
						val = $this.val();
					if (isNaN(val) || val < 0)
						val = "";
					SAVER.getFieldBy('id', id)[prop] = val;
				});
			});
		},

		mapUnit: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Единица измерения"],
				action: "mapUnit",
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);
			}, function() {
				SETTINGS.checkRadio(element, id, 'unit');
			});
		},

		filials: function(element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				typeOpt: 'filials',
				toplink: 3,
				title: loc["Адреса филиалов"],
				listitems: true,
				cls: 'tooltip-list',
				addBtn: '<a href="javascript://" class="list-add js-list-add" onclick="FIELDS.map.addNew(\'filials\','+id+', this)"></a>'
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				
				FIELDS.selector.scrollbarBuild(tooltip);
			});
		},

		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'map',
				toplink: 2,
				title: loc["Отступы"],
				paddingLR: field.paddingLR,
				paddingTop: field.paddingTop,
				paddingBottom: field.paddingBottom,
				height: field.height
			}, function(element, id) {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.sliderBuild(tooltip, id);
			});
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	button: {
		title: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			var btnDoneText = FIELDS.button.getBtnDoneText(field);

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 6,
				title: loc["Настройки"],
				action: "button-settings",
				btnDoneText: btnDoneText,
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				var btnDoneTextField = tooltip.find(".js-btn-done-text-field");

				btnDoneTextField.on("input", function(event) {
					FIELDS.button.setBtnDoneText(field, btnDoneTextField.val());
				});

				SETTINGS.tooltipLinks(element, id);
			});
		},
		actions: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: loc["Действие"],
				action: 'actions',
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				SETTINGS.tooltipLinks(element, id);

				// информация о использованных лимитах
				$.post(SERV.saveUrl, {
				    do: 'messageLimit'
				}, function(data) {
				    data = JSON.parse(data);
				    SERV.messageLimit = data;
				});
			});
		},
		sendAdmin: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="actions"></a>' + loc["Оповещение владельца"],
				action: 'sendAdmin',
				data: {
					sendAdmin: field.sendAdmin
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				var calcId = SAVER.json.calc.id;
				var button_id = tooltip.closest('[data-id]').attr('data-id');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('.tooltip-units__link').addClass('disabled');

				$('#notification').on('change', function () {
					if (this.checked) {
						$('.tooltip-units__link').removeClass('disabled');
						field.sendAdmin = true;
					} else {
						$('.tooltip-units__link').addClass('disabled');
						field.sendAdmin = false;
					}
				}).trigger('change');

				var limit1 = $('.limit-1'),
				    limit2 = $('.limit-2');

				progressBarUpdate(SERV.messageLimit.use.email, SERV.messageLimit.limits.email, limit1);
				progressBarUpdate(SERV.messageLimit.use.sms, SERV.messageLimit.limits.sms, limit2);
				$.post(SERV.saveUrl, {
				    do: 'messageLimit'
				}, function(data) {
				    data = JSON.parse(data);
				    progressBarUpdate(data.use.email, data.limits.email, limit1);
				    progressBarUpdate(data.use.sms, data.limits.sms, limit2);
				});

				/** 
				 * Сохраняем информацию о телефонах юзера
				 */
				if (SERV.saveUrl.indexOf('templates-editor') >= 0)
					window.adminTelResponse = {tels:[]};
				else {
					$.post('/admin-tel/'+SERV.userId, {
						do: 'find', 
						calcId: calcId,
						button_id: button_id
					}, function (response) {
						window.adminTelResponse = response;
					}, 'json');
				}
			});
		},
		sendUser: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="actions"></a>' + loc["Оповещение клиента"],
				action: 'sendUser',
				data: {
					sendUser: field.sendUser
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('.tooltip-units__link').addClass('disabled');

				$('#notification').on('change', function () {
					if (this.checked) {
						$('.tooltip-units__link').removeClass('disabled');
						field.sendUser = true;
					} else {
						$('.tooltip-units__link').addClass('disabled');
						field.sendUser = false;
					}
				}).trigger('change');

				var limit1 = $('.limit-1'),
				    limit2 = $('.limit-2');

				progressBarUpdate(SERV.messageLimit.use.email, SERV.messageLimit.limits.email, limit1);
				progressBarUpdate(SERV.messageLimit.use.sms, SERV.messageLimit.limits.sms, limit2);
				$.post(SERV.saveUrl, {
				    do: 'messageLimit'
				}, function(data) {
				        if (SERV.userId === 3) console.log(data);
				    data = JSON.parse(data);
				    progressBarUpdate(data.use.email, data.limits.email, limit1);
				    progressBarUpdate(data.use.sms, data.limits.sms, limit2);
				});
			});
		},
		openLink: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="actions"></a>' + loc["Переход по ссылке"],
				action: 'openLink',
				data: {
					linkActive: field.linkActive,
					link: field.link
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('#link-active').on('change', function () {
					if (!$('#is-not-link').length) {
						$('head').append('<style id="is-not-link">.tooltip-units__link.is-not-link{cursor:auto!important;}.tooltip-units__link.is-not-link.disabled{cursor:no-drop!important;}.tooltip-units__link.is-not-link:after{display:none!important;}</style>');
					}
					if (this.checked) {
						$('.tooltip-units__link').removeClass('disabled');
						$('#link-input').prop('disabled', false).css({cursor: 'auto'});
						field.linkActive = true;
					} else {
						$('.tooltip-units__link').addClass('disabled');
						$('#link-input').prop('disabled', true).css({cursor: 'no-drop'});
						field.linkActive = false;
					}
				}).trigger('change');
				$('#link-input').on('blur', function () {
					field.link = $(this).val();
				});
			});
		},
		/*
		 calculate: function (element, id) {
		 var field = SAVER.getFieldBy('id', id);
		 SETTINGS.openSettings(element, {
		 id: id,
		 type: 'button',
		 toplink: 3,
		 title: '<a href="javascript://" class="tooltip-units__prev" data-action="actions"></a>' + loc["Расчет результата"],
		 action: 'calculate',
		 data: {
		 calculateActive: field.calculateActive,
		 calculate: field.calculate
		 }
		 }, function () {
		 $('.tooltip').addClass('tooltip-wide');
		 SETTINGS.tooltipLinks(element, id);
		 $('#calculate-active').on('change', function () {
		 field.calculateActive = !!this.checked;
		 });
		 $('#calculate-select li').on('click', function (e) {
		 e.preventDefault();
		 var $this = $(this);
		 $('#calculate-select li').not($this).removeClass('selected');
		 $this.toggleClass('selected');
		 field.calculate = $this.hasClass('selected') ? $this.data('value'): 0;
		 });
		 });
		 },
		 */
		adminEmail: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			field.adminEmail = field.adminEmail || [];

			var adminEmailLength = 
				field
					.adminEmail
					.join(',')
					.replace(/^,/,'')
					.split(',')
					.length;
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendAdmin"></a>' + loc["Эл. почта получателя"] + '<a href="javascript://" class="list-add js-list-add"></a>',
				action: 'adminEmail',
				data: {
					adminEmail: field.adminEmail
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				SETTINGS.checkLimitEmailAdmin(field, tooltip);
				field.adminEmail = field.adminEmail || [];
				var input = function () {
					var $this = $(this),
						id = $this.data('value-id'),
						val = $this.val(),
						valid = DAT.valid.email(val);
					if (val != valid)
						$this.val(valid);

					field.adminEmail[$this.data('value-id')] = valid;
				};
				var blur = function () {
					var $this = $(this),
						id = $this.data('value-id'),
						val = $this.val();

					if (val.indexOf('@') == -1)
						$this.val("");

					$this.trigger('input');
				};
				var remove = function (e) {
					e.preventDefault();
					var $parent = $(this).parent().parent();
					var id = $parent.find('input').data('value-id');
					delete field.adminEmail[id];

					$('.debug-visited').removeClass('debug-visited');
					if (tooltip.find('.fade-list').length == 1) {
						$parent.before('<li id="admin-tel-container" style="display: none;"><div align="center"><p>' + loc["Пока почтовых адресов нет"] + '</p><p><a href="javascript://" onclick="$(\'.js-list-add\').click();">' + loc["Добавить адрес"] + '</a></p></div></li>');
						$('#admin-tel-container').slideDown(300);
						SETTINGS.checkScrollbar(this, 151);
					}
					else {
						var height = 59 + 73 * (tooltip.find('.tooltip-units .fade-list').length - 1);
						SETTINGS.checkScrollbar(this, height);
					}
					$parent.slideUp(300, function() {
						$parent.remove();
						SETTINGS.checkLimitEmailAdmin(field, tooltip);
					});
				};

				SETTINGS.scrollWrap(tooltip);

				tooltip.find('h4').on('click', '.js-list-add:not(.js-show-msg-arrow)', function (e) {

					if (SETTINGS.pausedListAdd)
						return;
					SETTINGS.pausedListAdd = 1;

					tooltip.find('.scrollbar-inner').stop().css({
						'height': tooltip.height() + 'px',
						'max-height': tooltip.height() + 'px'
					});

					e.preventDefault();
					$('#admin-tel-container').slideUp(300, function() {
						$(this).remove();
					});
					var $tooltipUnits = $('.tooltip-units');
					var id = parseInt($tooltipUnits.find('li input').last().data('value-id') || '0', 10) + 1;
					var $created = $('<li class="fade-list" style="display: none;"><div class="list-point"><input type="text" class="input-field input-field-text list-point__name email-input" data-value-id="' + id + '" placeholder="admin@example.com"><a class="list-point__remove" href="javascript://"></a></div></li>').appendTo($tooltipUnits);
					$created.find('.email-input').on('input', input);
					$created.find('.list-point__remove').on('click', remove);

					tooltip.find('.fade-list').slideDown(300, function() {
						setTimeout(function() {
							SETTINGS.pausedListAdd = 0;
						}, 60);
					});
					tooltip.find('.debug-visited').removeClass('debug-visited');

					var height = 59 + 73 * tooltip.find('.tooltip-units .fade-list').length;

					if (tooltip.find('.fade-list').length > 4)
						height = 350;

					SETTINGS.checkScrollbar(this, height);
					SETTINGS.scrollDown();
					SETTINGS.checkLimitEmailAdmin(field, tooltip);
				});
				$('.tooltip-units').on('click', '.list-point__remove', remove);
				$('.tooltip-units').on('input', '.email-input', input);
				$('.tooltip-units').on('blur', '.email-input', blur);
			});
		},
		userEmail: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendUser"></a>' + loc["Источник email адреса"],
				action: 'userEmail',
				data: {
					userEmail: field.userEmail
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				SETTINGS.scrollWrap(tooltip);
				$('#email-select li').on('click', function (e) {
					e.preventDefault();
					var $this = $(this),
						val = $this.data('value');
					$('#email-select li').not($this).each(function() {
						$(this).removeClass('selected');
						SETTINGS.changeInput($(this).data('typechange'), $(this).data('value'))
					});
					$this.toggleClass('selected');
					field.userEmail = $this.hasClass('selected') ? val: 0;
					SETTINGS.changeInput('email', val);
				});
				$('.nuzzle').on('click', function (e) {
					e.preventDefault();
					var $input = $('[data-id="' + $(this).data('nuzzle-to') + '"]');
					$('html, body').animate({scrollTop: $input.offset().top - $('.uimenu-blur').height() - 250}, 100);
					$input.css({
						'background': 'rgba(236, 245, 249, 0.5)',
					})
						.addClass('animated shake');
					setTimeout(function () {
						$input.css({'background': 'transparent'})
							.removeClass('animated shake');
					}, 1000);
				});
			});
		},
		adminTel: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: ['<a href="javascript://" class="tooltip-units__prev" data-action="sendAdmin"></a>' + loc["Тел. получателя"] + '<a href="javascript://" class="list-add" ',
						,BILLING.sms ? 'data-action="adminTelAdd"' : ''
						,'></a>']
						.join(''),
				action: 'adminTel',
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				var calcId = SAVER.json.calc.id;
				var button_id = tooltip.closest('[data-id]').attr('data-id');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				SETTINGS.checkLimitTelAdmin(field, tooltip);
				var $adminTelContainer = $('#admin-tel-container').parent();
				if ($adminTelContainer.length) {
					function preload(response) {
						if (SERV.userId === 3 || SERV.userId === 51) console.log(response);
						if (response.tels && response.tels.length > 0) {
							$adminTelContainer.find('li').remove();
							for (var i = 0; i < response.tels.length; i++) {
								var tel = response.tels[i],
									title_to_off = loc["Отключить из уведомлений"],
									title_to_on = loc["Подключить для уведомлений"],
									title_appr = loc["Подтвердите номер"];

								$adminTelContainer.append('<li class="fade-list"><div class="list-point"><input type="text" class="input-field input-field-text list-point__name tel-input [selected]" value="[value]" data-confirm="[confirm]" data-send_code="[send_code]" data-ub-title="[ub_title]" data-ub-pos="left"><i class="material-icons country-check-span">done</i><a class="list-point__remove" href="javascript://"></a></div></li>'.Signe({
									value: tel.number,
									selected: (tel.selected ? 'tel-input-selected': ''),
									confirm: (tel.confirm ? 'confirm': ''),
									ub_title: tel.confirm ? (tel.selected ? title_to_off : title_to_on) : title_appr,
									send_code: tel.send_code
								}));
							}

							$('.tooltip-units .tel-input').each(function () {
								var $telInput = $(this),
									val = $telInput.val(),
									mask = DAT.сountrieFullMaskByNumber(val);

								/**
								 * Маска будет адатироваться под первый введенный код страны
								 */
								$telInput.val(val).mask(mask);
								$telInput.attr('placeholder', mask.replace(/9/g,'_'));
								$telInput.prop('readonly', true);
								$telInput.addClass('mask-len-' + String(mask).length);

								if ($telInput.val() == "")
									$telInput.val(loc["Ошибка"]).next('i').remove();
								
								if ($telInput.data('confirm')) {

									$telInput.on('click.telinput', function() {
										if ($telInput.is('.tel-input-selected')) {
											$telInput.removeClass('tel-input-selected');
											$telInput.attr('data-ub-title', title_to_on);
											$.post('/admin-tel/'+SERV.userId, {
												do: 'anselected', 
												calcId: calcId,
												button_id: button_id,
												number: $telInput.val()
											}, function(response) {
												if (!response.status)
													$telInput.addClass('tel-input-selected');
											}, 'json');
										}
										else {
											$telInput.addClass('tel-input-selected');
											$telInput.attr('data-ub-title', title_to_off);
											$.post('/admin-tel/'+SERV.userId, {
												do: 'selected', 
												calcId: calcId,
												button_id: button_id,
												number: $telInput.val()
											}, function(response) {
												if (!response.status)
													$telInput.removeClass('tel-input-selected');
											}, 'json');
										}
									});
								}
								else {
									$telInput.css({'text-decoration': 'line-through', 'cursor': 'pointer'})
										.addClass('tel-input-through').on('click', function (e) {
											e.preventDefault();
											window.adminTelVal = $telInput.val();
											window.adminTelSendCode = $telInput.attr('data-send_code');
											$('[data-action="adminTelAdd"]').first().trigger('click');
										});
								}
							});
							$('.tooltip-units .list-point__remove').on('click', function (e) {
								e.preventDefault();
								var $removeButton = $(this);
								$.post('/admin-tel/'+SERV.userId, {
									do: 'delete',
									tel: $removeButton.closest('li').find('input').val(),
									calcId: calcId,
									button_id: button_id
								}, function (response) {
									var $parent = $removeButton.parent().parent();
									if ($('.fade-list').length == 1) {
										$parent.before('<li id="admin-tel-container" style="display: none;"><div align="center"><p>' + loc["Пока номеров нет"] + '</p><p><a href="javascript://" onclick="$(\'.list-add\').click();">' + loc["Добавить номер"] + '</a></p></div></li>');
										$('#admin-tel-container').slideDown(300);
									}
									$parent.slideUp(300, function() {
										$parent.remove();
										var height = tooltip.find('.tooltip-fade').height();
										if (height > 300)
											height = 300;
										SETTINGS.checkScrollbar($('.list-add')[0], height);
									});
								}, 'json');
							});

							var height = tooltip.find('.tooltip-fade').height();
							if (height > 300)
								height = 300;
							SETTINGS.checkScrollbar($('.list-add')[0], height);
						}
						$adminTelContainer.closest('.tooltip-fade').css('height', '');
						if (   $adminTelContainer.closest('.tooltip-fade').height() < 300
							&&!tooltip.find('.tooltip-units').length)
							tooltip.css('height', '');
					}
					preload(window.adminTelResponse);
					$.post('/admin-tel/'+SERV.userId, {
						do: 'find', 
						calcId: calcId,
						button_id: button_id
					}, function (response) {
						window.adminTelResponse = response;
						preload(response);
					}, 'json');
				}
			});
		},
		adminTelAdd: function (element, id) {
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="adminTel"></a>' + loc["Добавление ном. телефона"],
				action: 'adminTelAdd',
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				var calcId = SAVER.json.calc.id;
				var button_id = tooltip.closest('[data-id]').attr('data-id');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var $telInput = $('#tel-input');
				var $telCodeDiv = $('#tel-code-div');
				var $telCodeInput = $('#tel-code-input');
				var $telCodeError = $('#tel-code-error');
				var $telCodeRequest = $('#tel-code-request');
				var $telCodeSend = $('#tel-code-send');
				if (!$telInput.length) {
					return;
				}

				/**
				 * Прошло ли больше 5 минут
				 */
				var $timer = $('.time-left'),
					$btn = $('#tel-code-request');
				function minut5(stump) {
					return (DAT.timestump() - stump) < 300;
				}
				
				function startMinut5() {
					var $timer = $('.time-left');
					if (minut5(window.adminTelSendCode)) {
						var tik = function() {
							rem = DAT.getTimeRemaining(new Date((window.adminTelSendCode/1 + 300) * 1000));
							$('.time-left').text(loc["Повторная отправка возможна через"] + ' [minutes]:[seconds]'.Signe(rem));
							if (rem.minutes/1 === 0 && rem.seconds/1 === 0)
								stopMinut5();
						}
						tik();
						window.intervalMinut5 = setInterval(tik, 1000);
						$timer.show();
						$btn.hide();
					}
					else
						stopMinut5();
				}
				function startMinut5ease() {
					window.adminTelSendCode = DAT.timestump();
					startMinut5();
					$btn.animate({
						opacity: 0
					}, 300, function() {
						$btn.slideUp(300);
						$timer.slideDown(300, function() {
							$timer.animate({
								opacity: 1
							}, 300);
						});
					});
				}
				function stopMinut5() {
					tooltip.css('height', '');
					$timer.animate({
						opacity: 0
					}, 300, function() {
						$timer.slideUp(300);
						$btn.slideDown(300, function() {
							$btn.animate({
								opacity: 1
							}, 300);
						});
					});
				}
				$timer.hide();
				$btn.show();

				$telInput.val('').mask('+9 (999) 999-9999');
				var codesCountries = [],
					countries = FIELDS.input_text.availableCountries;
				$(countries).each(function() {
					codesCountries.push(parseInt(this.countryCode.replace(/\D+/g,"")));
				});
				$('body').on('keyup.mask', function() {
					var val = parseInt($telInput.val().replace(/\D+/g,"")),
						index = codesCountries.indexOf(val);
					if (index != -1) {
						$telInput.mask(countries[index].fieldMask).trigger('input');
						$telInput.val(val);
						$telInput.attr('placeholder', countries[index].fieldMask.replace(/9/g,'_'));
						$telInput.attr('data-code-mask', countries[index].codeMask);
					}
				});

				$telCodeInput.val('').on('input', function () {
					$telCodeError.slideUp(300, function() {
						$telCodeError.val('')
					});
					if ($telCodeInput.val() == '')
						$telCodeSend.attr('disabled', 'disabled');
					else
						$telCodeSend.removeAttr('disabled');
				});
				$telCodeError.html('');
				$telCodeRequest.on('click', function (e) {
					e.preventDefault();
					if (!$telInput.val()) { // if (!(/^\+[0-9] [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$/g.test($telInput.val()))) {
						return;
					}
					SETTINGS.layer('wait');

					$.post('/admin-tel/'+SERV.userId, {
						do: 'request-code', 
						tel: $telInput.val(),
						codeMask: $telInput.attr('data-code-mask'),
						calcId: calcId,
						button_id: button_id
					}, function (response) {
						if (response.existsAndChecked) {
							$('[data-action="adminTel"]').trigger('click');
							return;
						}
						SETTINGS.layer('hide');
						$telInput.prop('readonly', true);
						$telCodeInput.val('');
						$telCodeError.html('');
						$telCodeDiv.prop('hidden', false);
						$telCodeSend.prop('hidden', false);
						$telCodeRequest.removeClass('btn-green').addClass('btn-dark').html(loc["Отправить повторно"]);
						if (response.limit) {
							SETTINGS.layer('limit');
						}
						var height = tooltip.find('.tooltip-fade').height();
						SETTINGS.checkScrollbar(tooltip, height);
						startMinut5ease();
					}, 'json');
				});
				$telCodeSend.on('click', function (e) {
					e.preventDefault();
					SETTINGS.layer('wait');
					$telCodeSend.attr('disabled', 'disabled');
					$.post('/admin-tel/'+SERV.userId, {
						do: 'send-code', 
						tel: $telInput.val(), 
						code: $telCodeInput.val(), 
						calcId: calcId,
						button_id: button_id
					}, function (response) {
						if (response.error) {
							SETTINGS.layer('error');
							setTimeout(function () {
								SETTINGS.layer('hide');
								$telCodeError.hide().html(response.error).slideDown(300);
								$telCodeSend.attr('disabled', 'disabled');
							}, 300);
						} else {
							SETTINGS.layer('success');
							setTimeout(function () {
								$('[data-action="adminTel"]').trigger('click');
							}, 300);
						}
					}, 'json');
				});
				if (window.adminTelVal) {
					$telInput.val(window.adminTelVal).prop('readonly', true);
					window.adminTelVal = '';
					$telCodeInput.val('');
					$telCodeError.html('');
					$telCodeDiv.prop('hidden', false);
					$telCodeSend.prop('hidden', false);
					$telCodeRequest.removeClass('btn-green').addClass('btn-dark').html(loc["Отправить повторно"]);
					startMinut5();
				}

				setTimeout(function() {
					SETTINGS.scrollUnwrap();
					tooltip.css('height', '');
				}, 300);

				/** 
				 * Сохраняем информацию о телефонах юзера
				 */
				$.post('/admin-tel/'+SERV.userId, {
					do: 'find', 
					calcId: calcId,
					button_id: button_id
				}, function (response) {
					window.adminTelResponse = response;
				}, 'json');
			});
		},
		userTel: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendUser"></a>' + loc['Источник номера телефона'],
				action: 'userTel',
				data: {
					userTel: field.userTel
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('#tel-select li').on('click', function (e) {
					e.preventDefault();
					var $this = $(this),
						val = $this.data('value');
					$('#tel-select li').not($this).each(function() {
						$(this).removeClass('selected');
						SETTINGS.changeInput($(this).data('typechange'), $(this).data('value'))
					});
					$this.toggleClass('selected');
					field.userTel = $this.hasClass('selected') ? val: 0;
					SETTINGS.changeInput('tel', val);
				});
				$('.nuzzle').on('click', function (e) {
					e.preventDefault();
					var $input = $('[data-id="' + $(this).data('nuzzle-to') + '"]');
					$('html, body').animate({scrollTop: $input.offset().top - $('.uimenu-blur').height() - 250}, 100);
					$input.css({
						'background': 'rgba(236, 245, 249, 0.5)',
					})
						.addClass('animated shake');
					setTimeout(function () {
						$input.css({'background': 'transparent'})
							.removeClass('animated shake');
					}, 1000);
				});
			});
		},
		adminEmailTemplate: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendAdmin"></a>' + loc["Шаблон уведомления EMAIL"],
				action: 'adminEmailTemplate',
				data: {
					adminEmailTemplate: field.adminEmailTemplate
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var $emailTemplateInput = $('#email-template-input');
				var $emailTemplateInputHighlighted = $('#email-template-input-highlighted');
				if (!$emailTemplateInput.length) {
					return;
				}
				var text = field.adminEmailTemplate;
				text = text == '' ? HIGHLIGHTER.getStandartTpl() : text;
				text = HIGHLIGHTER.pretty(text);

				$emailTemplateInput.val(text);
				$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
				setTimeout(function () {
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
					var getCurrentPos = function() {
					    var getCursorPosition = function(ctrl) {
					        var CaretPos = 0;
					        if (document.selection) {
					            ctrl.focus();
					            var Sel = document.selection.createRange();
					            Sel.moveStart('character', -ctrl.value.length);
					            CaretPos = Sel.text.length;
					        } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
					            CaretPos = ctrl.selectionStart;
					        }
					        return CaretPos;
					    };
					    var cursorPos = getCursorPosition($emailTemplateInput[0]),
					        lt = -1,
					        gt = -1,
					        word = '';
					    var text = $emailTemplateInput.val();
					    var words = HIGHLIGHTER.getAllWords();
					    for (var i = 0; i < words.length; i++) {
					        var a = text.indexOf('<' + words[i] + '>'),
					            b = a + words[i].length + 2;
					        if (a == -1) {
					            continue;
					        }
					        if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
					            lt = a;
					            gt = b;
					            word = '<' + words[i] + '>';
					            return [cursorPos, lt, gt, word];
					        }
					    }
					    return false;
					};
					var selectText = function($e, start, end) {
					    var input = $e[0];
					    input.selectionStart = start;
					    input.selectionEnd = end;
					    input.focus();
					};
					var currentPos;
					$emailTemplateInput.on('keydown', function(e) {
					    currentPos = getCurrentPos();
					    if (!currentPos) {
					        return;
					    }
					    if (e.keyCode == 8) { // backspace
					        if (currentPos[0] == currentPos[2]) {
					            selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					            return;
					        }
					    }
					    if (e.keyCode == 46) { // delete
					        if (currentPos[0] == currentPos[1]) {
					            selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					            return;
					        }
					    }
					    if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
					        selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					        return;
					    }
					}).on('keypress', function(e) {
					    if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
					        selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					        return;
					    }
					});
				}, 30);
				var getCurrentPos = function () {
					var getCursorPosition = function (ctrl) {
						var CaretPos = 0;
						if (document.selection) {
							ctrl.focus();
							var Sel = document.selection.createRange();
							Sel.moveStart('character', -ctrl.value.length);
							CaretPos = Sel.text.length;
						} else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
							CaretPos = ctrl.selectionStart;
						}
						return CaretPos;
					};
					var cursorPos = getCursorPosition($emailTemplateInput[0]), lt = -1, gt = -1, word = '';
					var text = $emailTemplateInput.val();
					var words = HIGHLIGHTER.getAllWords();
					for (var i = 0; i < words.length; i++) {
						var a = text.indexOf('<' + words[i] + '>'), b = a + words[i].length + 2;
						if (a == -1) {
							continue;
						}
						if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
							lt = a;
							gt = b;
							word = '<' + words[i] + '>';
							return [cursorPos, lt, gt, word];
						}
					}
					return false;
				};
				var selectText = function ($e, start, end) {
					var input = $e[0];
						input.selectionStart = start;
						input.selectionEnd = end;
						input.focus();
					};
				var currentPos;
				$emailTemplateInput.on('keydown', function (e) {
					currentPos = getCurrentPos();
					if (!currentPos) {
						return;
					}
					if (e.keyCode == 8) { // backspace
						if (currentPos[0] == currentPos[2]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if (e.keyCode == 46) { // delete
						if (currentPos[0] == currentPos[1]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('keypress', function (e) {
					if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('contextmenu drag cut copy paste', function (e) {
					//e.preventDefault();
				}).on('input', function () {
					var text = $(this).val();
					field.adminEmailTemplate = HIGHLIGHTER.original(text);
					$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
					var getCurrentPos = function() {
					    var getCursorPosition = function(ctrl) {
					        var CaretPos = 0;
					        if (document.selection) {
					            ctrl.focus();
					            var Sel = document.selection.createRange();
					            Sel.moveStart('character', -ctrl.value.length);
					            CaretPos = Sel.text.length;
					        } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
					            CaretPos = ctrl.selectionStart;
					        }
					        return CaretPos;
					    };
					    var cursorPos = getCursorPosition($emailTemplateInput[0]),
					        lt = -1,
					        gt = -1,
					        word = '';
					    var text = $emailTemplateInput.val();
					    var words = HIGHLIGHTER.getAllWords();
					    for (var i = 0; i < words.length; i++) {
					        var a = text.indexOf('<' + words[i] + '>'),
					            b = a + words[i].length + 2;
					        if (a == -1) {
					            continue;
					        }
					        if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
					            lt = a;
					            gt = b;
					            word = '<' + words[i] + '>';
					            return [cursorPos, lt, gt, word];
					        }
					    }
					    return false;
					};
					var selectText = function($e, start, end) {
					    var input = $e[0];
					    input.selectionStart = start;
					    input.selectionEnd = end;
					    input.focus();
					};
					var currentPos;
					$emailTemplateInput.on('keydown', function(e) {
					    currentPos = getCurrentPos();
					    if (!currentPos) {
					        return;
					    }
					    if (e.keyCode == 8) { // backspace
					        if (currentPos[0] == currentPos[2]) {
					            selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					            return;
					        }
					    }
					    if (e.keyCode == 46) { // delete
					        if (currentPos[0] == currentPos[1]) {
					            selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					            return;
					        }
					    }
					    if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
					        selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					        return;
					    }
					}).on('keypress', function(e) {
					    if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
					        selectText($emailTemplateInput, currentPos[1], currentPos[2]);
					        return;
					    }
					});
				});
				$('[data-insert-text]').on('click', function (e) {
					e.preventDefault();
					HIGHLIGHTER.insert($(this).data('insert-text'), $emailTemplateInput);
					$emailTemplateInput.trigger('input');
				});

				var $emailTemplateSubj = $('#email-template-subj');
				$emailTemplateSubj.on('change', function() {
					field.adminEmailSubj = $(this).val();
				});

				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.css('height',tooltip.find('.tooltip-fade').css('height'))
				SETTINGS.scrollWrap(tooltip);
			});
		},
		userEmailTemplate: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendUser"></a>' + loc["Шаблон уведомления EMAIL"],
				action: 'userEmailTemplate',
				data: {
					userEmailTemplate: field.userEmailTemplate
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var $emailTemplateInput = $('#email-template-input');
				var $emailTemplateInputHighlighted = $('#email-template-input-highlighted');
				if (!$emailTemplateInput.length) {
					return;
				}
				var text = field.userEmailTemplate;
				text = text == '' ? HIGHLIGHTER.getStandartTpl() : text;
				text = HIGHLIGHTER.pretty(text);

				$emailTemplateInput.val(text);
				$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
				setTimeout(function () {
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				}, 30);
				var getCurrentPos = function () {
					var getCursorPosition = function (ctrl) {
						var CaretPos = 0;
						if (document.selection) {
							ctrl.focus();
							var Sel = document.selection.createRange();
							Sel.moveStart('character', -ctrl.value.length);
							CaretPos = Sel.text.length;
						} else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
							CaretPos = ctrl.selectionStart;
						}
						return CaretPos;
					};
					var cursorPos = getCursorPosition($emailTemplateInput[0]), lt = -1, gt = -1, word = '';
					var text = $emailTemplateInput.val();
					var words = HIGHLIGHTER.getAllWords();
					for (var i = 0; i < words.length; i++) {
						var a = text.indexOf('<' + words[i] + '>'), b = a + words[i].length + 2;
						if (a == -1) {
							continue;
						}
						if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
							lt = a;
							gt = b;
							word = '<' + words[i] + '>';
							return [cursorPos, lt, gt, word];
						}
					}
					return false;
				};
				var selectText = function ($e, start, end) {
					var input = $e[0];
						input.selectionStart = start;
						input.selectionEnd = end;
						input.focus();
					};
				var currentPos;
				$emailTemplateInput.on('keydown', function (e) {
					currentPos = getCurrentPos();
					if (!currentPos) {
						return;
					}
					if (e.keyCode == 8) { // backspace
						if (currentPos[0] == currentPos[2]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if (e.keyCode == 46) { // delete
						if (currentPos[0] == currentPos[1]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('keypress', function (e) {
					if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('contextmenu drag cut copy paste', function (e) {
					//e.preventDefault();
				}).on('input', function () {
					var text = $(this).val();
					field.userEmailTemplate = HIGHLIGHTER.original(text);
					$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				});
				$('[data-insert-text]').on('click', function (e) {
					e.preventDefault();
					HIGHLIGHTER.insert($(this).data('insert-text'), $emailTemplateInput);
					$emailTemplateInput.trigger('input');
				});

				var $emailTemplateSubj = $('#email-template-subj');
				$emailTemplateSubj.on('change', function() {
					var f = $(this);
					if (f.val().replace(/\s/g, '') == '')
						f.val('uCalc');
					field.userEmailSubj = $(this).val();
				});
				var $emailTemplateReplyto = $('#email-template-replyto');
				$emailTemplateReplyto.on('input', function() {
					var f = $(this);
					if (f.val().replace(/\s/g, '') == '')
						f.val('noreply@ucozmail.com');
					field.replyto = f.val();
				});
				$emailTemplateReplyto.on('input.fieldInitial', function() { // валидация почты
	                var $this = $(this),
	                    val = $(this).val(),
	                    valid = DAT.valid.email(val);
	                if (val != valid)
	                    $this.val(valid);
	                $this.removeClass('need-input');
	                $this.next('.input-alert').remove();
	            });

				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				SETTINGS.scrollWrap(tooltip);
			});
		},
		adminSmsTemplate: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendAdmin"></a>' + loc["Шаблон уведомления SMS"],
				action: 'userSmsTemplate',
				data: {
					userSmsTemplate: field.adminSmsTemplate
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var $emailTemplateInput = $('#email-template-input');
				var $emailTemplateInputHighlighted = $('#email-template-input-highlighted');
				if (!$emailTemplateInput.length) {
					return;
				}
				var text = HIGHLIGHTER.pretty(field.adminSmsTemplate);

				$emailTemplateInput.val(text);
				$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
				setTimeout(function () {
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				}, 30);
				var getCurrentPos = function () {
					var getCursorPosition = function (ctrl) {
						var CaretPos = 0;
						if (document.selection) {
							ctrl.focus();
							var Sel = document.selection.createRange();
							Sel.moveStart('character', -ctrl.value.length);
							CaretPos = Sel.text.length;
						} else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
							CaretPos = ctrl.selectionStart;
						}
						return CaretPos;
					};
					var cursorPos = getCursorPosition($emailTemplateInput[0]), lt = -1, gt = -1, word = '';
					var text = $emailTemplateInput.val();
					var words = HIGHLIGHTER.getAllWords();
					for (var i = 0; i < words.length; i++) {
						var a = text.indexOf('<' + words[i] + '>'), b = a + words[i].length + 2;
						if (a == -1) {
							continue;
						}
						if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
							lt = a;
							gt = b;
							word = '<' + words[i] + '>';
							return [cursorPos, lt, gt, word];
						}
					}
					return false;
				};
				var selectText = function ($e, start, end) {
					var input = $e[0];
						input.selectionStart = start;
						input.selectionEnd = end;
						input.focus();
					};
				var currentPos;
				$emailTemplateInput.on('keydown', function (e) {
					currentPos = getCurrentPos();
					if (!currentPos) {
						return;
					}
					if (e.keyCode == 8) { // backspace
						if (currentPos[0] == currentPos[2]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if (e.keyCode == 46) { // delete
						if (currentPos[0] == currentPos[1]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('keypress', function (e) {
					if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('contextmenu drag cut copy paste', function (e) {
					//e.preventDefault();
				}).on('input', function () {
					var text = $(this).val();
					field.adminSmsTemplate = HIGHLIGHTER.original(text);
					$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				});
				$('[data-insert-text]').on('click', function (e) {
					e.preventDefault();
					HIGHLIGHTER.insert($(this).data('insert-text'), $emailTemplateInput);
					$emailTemplateInput.trigger('input');
				});

				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				SETTINGS.scrollWrap(tooltip);
			});
		},
		userSmsTemplate: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="sendUser"></a>' + loc["Шаблон уведомления SMS"],
				action: 'userSmsTemplate',
				data: {
					userSmsTemplate: field.userSmsTemplate
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var $emailTemplateInput = $('#email-template-input');
				var $emailTemplateInputHighlighted = $('#email-template-input-highlighted');
				if (!$emailTemplateInput.length) {
					return;
				}
				var text = HIGHLIGHTER.pretty(field.userSmsTemplate);
				
				$emailTemplateInput.val(text);
				$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
				setTimeout(function () {
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				}, 30);
				var getCurrentPos = function () {
					var getCursorPosition = function (ctrl) {
						var CaretPos = 0;
						if (document.selection) {
							ctrl.focus();
							var Sel = document.selection.createRange();
							Sel.moveStart('character', -ctrl.value.length);
							CaretPos = Sel.text.length;
						} else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
							CaretPos = ctrl.selectionStart;
						}
						return CaretPos;
					};
					var cursorPos = getCursorPosition($emailTemplateInput[0]), lt = -1, gt = -1, word = '';
					var text = $emailTemplateInput.val();
					var words = HIGHLIGHTER.getAllWords();
					for (var i = 0; i < words.length; i++) {
						var a = text.indexOf('<' + words[i] + '>'), b = a + words[i].length + 2;
						if (a == -1) {
							continue;
						}
						if (a == cursorPos || b == cursorPos || (a < cursorPos && b > cursorPos)) {
							lt = a;
							gt = b;
							word = '<' + words[i] + '>';
							return [cursorPos, lt, gt, word];
						}
					}
					return false;
				};
				var selectText = function ($e, start, end) {
					var input = $e[0];
						input.selectionStart = start;
						input.selectionEnd = end;
						input.focus();
					};
				var currentPos;
				$emailTemplateInput.on('keydown', function (e) {
					currentPos = getCurrentPos();
					if (!currentPos) {
						return;
					}
					if (e.keyCode == 8) { // backspace
						if (currentPos[0] == currentPos[2]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if (e.keyCode == 46) { // delete
						if (currentPos[0] == currentPos[1]) {
							selectText($emailTemplateInput, currentPos[1], currentPos[2]);
							return;
						}
					}
					if ((e.keyCode == 8 || e.keyCode == 46) && currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('keypress', function (e) {
					if (currentPos[0] > currentPos[1] && currentPos[0] < currentPos[2]) {
						selectText($emailTemplateInput, currentPos[1], currentPos[2]);
						return;
					}
				}).on('contextmenu drag cut copy paste', function (e) {
					//e.preventDefault();
				}).on('input', function () {
					var text = $(this).val();
					field.userSmsTemplate = HIGHLIGHTER.original(text);
					$emailTemplateInputHighlighted.html(HIGHLIGHTER.highlight(text) + '\n');
					$emailTemplateInput.width($emailTemplateInputHighlighted.width()).height($emailTemplateInputHighlighted.height());
				});
				$('[data-insert-text]').on('click', function (e) {
					e.preventDefault();
					HIGHLIGHTER.insert($(this).data('insert-text'), $emailTemplateInput);
					$emailTemplateInput.trigger('input');
				});

				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				SETTINGS.scrollWrap(tooltip);
			});
		},
		accept: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 6,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="title"></a>' + loc["Согласие на сбор данных"],
				action: 'accept',
				data: {
					accept: field.accept,
					acceptStandart: field.acceptStandart
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('.tooltip-units__link').addClass('disabled');

				var $editorLink = $('.editor-link');

				$('#accept').on('change', function () {
					var $accept_text = tooltip.closest('[data-id]').find('.accept-text');

					if (!$('#is-not-link').length) {
						$('head').append('<style id="is-not-link">.tooltip-units__link.is-not-link{cursor:auto!important;}.tooltip-units__link.is-not-link.disabled{cursor:no-drop!important;}.tooltip-units__link.is-not-link:after{display:none!important;}</style>');
					}

					if (this.checked) {
						$('.accept-standart').removeClass('disabled');
						field.accept = true;

						$accept_text.slideDown(300, function() {
							$accept_text.animate({
								opacity: 1
							}, 300);
						});
					} 
					else {
						$('.tooltip-units__link').addClass('disabled');
						field.accept = false;

						$accept_text.animate({
							opacity: 0
						}, 300, function() {
							$accept_text.slideUp(300);
						});
					}
					randerEditorLink();
				}).trigger('change');

				$('#acceptStandart').on('change', function () {
					if (this.checked)
						field.acceptStandart = true;
					else
						field.acceptStandart = false;
					randerEditorLink();
				}).trigger('change');

				function randerEditorLink() {
					var inputAccept = $('#accept')[0].checked;
					var inputAcceptStandart = $('#acceptStandart')[0].checked;
					if (!inputAccept) {
						$editorLink.addClass('disabled');
						$editorLink.attr('data-tool-freez', 1);
					}
					else if (inputAcceptStandart) {
						$editorLink.addClass('disabled');
						$editorLink.removeAttr('data-tool-freez');
					}
					else {
						$editorLink.removeClass('disabled');
						$editorLink.attr('data-tool-freez', 1);
					}
				}

				$editorLink.on('click', function() {
					if (!$editorLink.hasClass('disabled')) {
						var field = SAVER.getFieldBy('id', id);
						SETTINGS.openHtmlEditor(field, 'acceptHtml');
					}
				});
			});
		},
		payment: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="actions"></a>' + loc["Переход к оплате"],
				action: 'payment',
				payment: field.payment,
				data: {
					payment: field.payment
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				var fade = $('.settings--active .tooltip-fade');
				fade.css('max-height', fade.css('height'));
				setTimeout(function() {
					fade.css('max-height', '')
						.css('height', fade.css('height'));
					SETTINGS.checkScrollbar(fade[0], 343);
				}, 0);
			}, SETTINGS.checkPayment);
		},
		// через PayPal
		PayPalSettings: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="payment"></a>' + loc["Подключение и настройки"],
				action: 'PayPalSettings',
				data: {
					PayPalCurr: field.PayPalCurr,
					PayPalMail: field.PayPalMail,
					PayPalSubject: field.PayPalSubject
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				$('#PayPal-curr-input').val(field.PayPalCurr)
				.on('change', function () {
					field.PayPalCurr = $(this).val();
				});
				$('#PayPal-mail-input').on('input', function () {
					field.PayPalMail = $(this).val();
				});
				$('#PayPal-subject-input').on('input', function () {
					field.PayPalSubject = $(this).val();
				});
			});
		},
		// через яндекс кассу
		yaCassaSettings: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="payment"></a>' + loc["Подключение и настройки"],
				action: 'yaCassaSettings',
				data: {
					yaCassaShopId: field.yaCassaShopId,
					yaCassaScId: field.yaCassaScId
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				$('#yaCassa-shopid-input').on('input', function () {
					field.yaCassaShopId = $(this).val();
				});
				$('#yaCassa-scid-input').on('input', function () {
					field.yaCassaScId = $(this).val();
				});
			});
		},
		// через яндекс деньги
		yaMoneySettings: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="payment"></a>' + loc["Подключение и настройки"],
				action: 'yaMoneySettings',
				data: {
					yaMoneyId: field.yaMoneyId,
					yaMoneySubject: field.yaMoneySubject
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				$('#yaMoney-id-input').on('blur', function () {
					var val = $(this).val();
					if (val.length < 15)
						$(this).val('');
					else
						field.yaMoneyId = val;
				});
				$('#yaMoney-subject-input').on('input', function () {
					field.yaMoneySubject = $(this).val();
				});
			});
		},
		amount: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 5,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="payment"></a>' + loc["Источник суммы"],
				action: 'amount',
				data: {
					amount: field.amount
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);
				$('#amount-select li').on('click', function (e) {
					e.preventDefault();
					var $this = $(this);
					$('#amount-select li').not($this).removeClass('selected');
					$this.toggleClass('selected');
					field.amount = $this.hasClass('selected') ? $this.data('value'): 0;
				});
			});
		},


		/** TARGETS ACTIONS */
		yandexMainMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			var isTargetActive = "" + field.targets.yandex.isActive === "true";

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="targetsMainMenu"></a>' + loc["Цель в Яндекс.Метрике"],
				action: "targets-yandex-main-menu",
				data: {
					isChecked: isTargetActive
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addTargetEnabledChangeHandler(tooltip, field, element, "yandex");
			});
		},


		yandexSettingsMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			var targetData = field.targets.yandex;

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="yandexMainMenu"></a>' + loc["Настройки"],
				action: "targets-yandex-settings-menu",
				data: targetData
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addTargetNameChangeHandler(tooltip, field, element, "yandex");
				TargetsCommonOperations.addTargetUrlChangeHandler(tooltip, field, element, "yandex");
			});
		},


		yandexDisabledMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="targetsMainMenu"></a>' + loc["Цель в Яндекс.Метрике"],
				action: "targets-yandex-disabled-menu",
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addActivateServiceLinkClickHandler(tooltip, field, element, "yandex");
			});
		},


		googleMainMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			var isTargetActive = "" + field.targets.google.isActive === "true";

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="targetsMainMenu"></a>' + loc["Цель в Google Analytics"],
				action: "targets-google-main-menu",
				data: {
					isChecked: isTargetActive
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addTargetEnabledChangeHandler(tooltip, field, element, "google");
			});
		},


		googleSettingsMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			var targetData = field.targets.google;

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="googleMainMenu"></a>' + loc["Настройки"],
				action: "targets-google-settings-menu",
				data: targetData
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addTargetNameChangeHandler(tooltip, field, element, "google");
				TargetsCommonOperations.addTargetUrlChangeHandler(tooltip, field, element, "google");
			});
		},


		googleDisabledMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: '<a href="javascript://" class="tooltip-units__prev" data-action="targetsMainMenu"></a>' + loc["Цель в Google Analytics"],
				action: "targets-google-disabled-menu",
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.tooltipLinks(element, id);

				TargetsCommonOperations.addActivateServiceLinkClickHandler(tooltip, field, element, "google");
			});
		},


		targetsMainMenu: function(element, id) {
			var field = SAVER.getFieldBy('id', id);

			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 4,
				title: loc["Цели"],
				action: 'targets-main-menu',
				data: {}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');

				tooltip.off("click", '[data-action]').on("click", '[data-action]', function(event) {
					var clickedLink = $(event.target).closest('[data-action]');
					var isTitleLink = clickedLink.closest(".js-popup-title").length > 0;

					if(clickedLink.hasClass('disabled')) {
						return;
					}

					var linkServiceName = clickedLink.addClass("disabled").data('service-name');

					if(!isTitleLink) {
						TargetsCommonOperations.Utils.addPreloader(tooltip);
					}

					/** Проверка подключения сервиса (Гугл/Яндекс) */
					$.post(location.pathname, {
						"do": "check_stat",
						"service": linkServiceName
					})
					.done(function(response) {

						// console.log(response)

						try {
							var responseObject = JSON.parse(response);
							var linkAction = clickedLink.data('action');

							/** Сервис не подключен */
							if("connected" in responseObject && responseObject.connected !== "ok") {
								linkAction = linkServiceName + "DisabledMenu";

								var statData = window.StatData = window.StatData || {};
								statData[linkServiceName] = {
									activationLink: responseObject.url
								}
							}

							$(element).removeClass('settings-toplinks__li-link--active');
							SETTINGS[field.type][linkAction](element, id);
						} catch(exception) {}
					});
				});
			});
		},
		/** TARGETS ACTIONS END */



		colors: function (element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 3,
				title: loc["Цвета"],
				action: 'colors',
				data: {
					textColor: field.textColor,
					textColorHover: field.textColorHover,
					borderColor: field.borderColor,
					backgroundColor: field.backgroundColor,
					backgroundColorHover: field.backgroundColorHover
				}
			}, function() {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				$('[data-color-picker]').each(function(i) {
					var $this = $(this);
					var color = $this.css('background-color');
					colorPicker($this, color, 'colorpicker' + i, $this.parent().parent().parent());
					$('.sp-container').addClass('sp-hidden');
					$this.addClass('colorpicker' + i + '-button');
					$this.on('change.settings', function() {
						var field = SAVER.getFieldBy('id', id);
						var color = $this.css('background-color');
						var colorType = $this.data('color-picker');

						/** Юзер захотел поредачить ручками цвета, стили темы больше не действуют для этого поля */
						field.handledViaThemeStyles = false;
						field[colorType] = color;
						RANDER.setStyleFromField(field);

					});
				});
				setTimeout(function() {
					SETTINGS.scrollUnwrap();
					tooltip.css('height', tooltip.height()+ 'px');
				}, 300);
			});
		},
		size: function(element, id) {
			var field = SAVER.getFieldBy('id', id);
			SETTINGS.openSettings(element, {
				id: id,
				type: 'button',
				toplink: 2,
				title: loc["Размеры и отступы"],
				action: 'sizes',
				data: {
					align: field.align,
					fontSize: field.fontSize,
					borderRadius: field.borderRadius,
					paddingTop: field.paddingTop,
					paddingBottom: field.paddingBottom
				}
			}, function () {
				var tooltip = $(element).closest('.settings-toplinks').find('.tooltip');
				tooltip.addClass('tooltip-wide');
				SETTINGS.sliderBuild(element, id);
			});
		},
		remove: function(element) {
			SWAP.fieldDel(element);
		}
	},
	tooltipLinks: function (element, id) {
		var field = SAVER.getFieldBy('id', id);
		$('.tooltip [data-action]').click(function () {
			if ($(this).hasClass('disabled'))
				return;
			$(element).removeClass('settings-toplinks__li-link--active');
			SETTINGS[field.type][$(this).data('action')](element, id);
		});
	},
	changeAlign: function (radio,id) { // меняет выравнивание (left / right / center / justify)

		var radio = $(radio);
		var align = radio.val();
		var field = SAVER.getFieldBy('id', id);
		field.align = align;
		RANDER.setStyleFromField(field);

	},
	layer: function (status, text) {
		var $tooltipUnits = $('.tooltip-units');
		//$tooltipUnits.css({position: 'relative'});
		var $layer = $tooltipUnits.find('.tooltip-units__overlay'); //$tooltipUnits.find('.layer');
		if (!$layer.length) {
			$layer = $('<div class="tooltip-units__overlay"></div>').prependTo($tooltipUnits);
		}
		$layer.prop('hidden', false);
		switch (status) {
			case 'wait':
				$layer.html('<span class="tooltip-units__loader"></span>');//$layer.html('<div style="display:inline-block;height:100%;vertical-align:middle;"></div><i class="material-icons" style="display:inline-block;vertical-align:middle;font-size:48px;color:gray;">watch_later</i>').prop('hidden', false);
				break;
			case 'success':
				$layer.html('<span class="tooltip-units__success"></span>');//$layer.html('<div style="display:inline-block;height:100%;vertical-align:middle;"></div><i class="material-icons" style="display:inline-block;vertical-align:middle;font-size:48px;color:green;">offline_pin</i>').prop('hidden', false);
				break;
			case 'error':
				$layer.html('<span class="tooltip-units__error"></span>');//$layer.html('<div style="display:inline-block;height:100%;vertical-align:middle;"></div><i class="material-icons" style="display:inline-block;vertical-align:middle;font-size:48px;color:red;">cancel</i>').prop('hidden', false);
				break;
			/*
			 case 'text':
			 $layer.html(text).prop('hidden', false);
			 break;
			 */
			case 'limit':
				$layer.html('<div class="overlay-center"><p class="text-center">' 
							+ loc["Исчерпан лимит количества отправленных кодов"] 
						+ '</p><p class="text-center">' 
							+ loc["Обратитесь в службу <a [href]>тех. поддержки</a>"].Signe({
								'href': 'href="javascript://" onclick="$(\'.modal_overlay-help\').fadeIn(300);"'
							})
						+ '</p></div>');
				break;
			case 'hide':
				$layer.prop('hidden', true);
				break;
			default:
				if (SERV.userId === 3) console.log('SETTINGS.layer(): bad status: ' + status);
		}
	},
	// ->>>
	calc: {
		// <<<-
		theme: function(element) {
			SETTINGS.openSettings(element, {
				type: 'text',
				toplink: 2,
				title: loc["Тема оформления"],
				theme: true,
				dontsetleft: true
			}, function() {
				CALCULATOR.ThemeManager.activateSwitcherOfCurrentTheme();
			});
		},


		scheme: function(element) {
			SETTINGS.openSettings(element, {
				type: 'text',
				toplink: 3,
				title: loc["Цветовые схемы"],
				scheme: true,
				dontsetleft: true
			}, function() {
				CALCULATOR.ThemeManager.renderColorSelector();
			});
		},
		bg: function(element) {
			SETTINGS.openSettings(element, {
				type: 'text',
				toplink: 4,	// временно. было 3  (теперь стало 4, отчет с конца)
				title: loc["Цвет фона"],
				bg: true,
				bgColor: SAVER.json.calc.bg,
				dontsetleft: true
			}, function() {
				$('.colorPicker').each(function(i) {
					var wrapper = $(this).closest(".colorset");

					var color  		   = $(this).attr('data-color'),
						container      = $(this).attr('data-container');
					generatedClass = 'colorpicker' + i;
					colorPicker($(this), color, generatedClass, $(this).parent(), function() {
						SETTINGS.mousedown_in_tooltip = true;
						$(document).off('mouseup.tooltipBg');
						$(document).on('mouseup.tooltipBg', function() {
							SETTINGS.mousedown_in_tooltip = false;
							$(document).off('mouseup.tooltipBg');
						});
					}, function(selectedColor) {
						SAVER.json.calc.handledViaThemeStyles = false;
						SAVER.json.calc.bg = selectedColor;
						RANDER.applyBgStylesForCalc(selectedColor);

					});

					$(this).on('change.settings', function() {
						var color = $(this).val();

						SAVER.json.calc.handledViaThemeStyles = false;

						RANDER.applyBgStylesForCalc(color);

						SAVER.json.calc.bg = color;
					});
				});
			});
		},
		struct: function(element) {
			SETTINGS.openSettings(element, {
				type: 'text',
				toplink: 2,	// временно. было 4
				title: loc["Структура"],
				struct: true
			}, function() {
				$('#structure-item' + SAVER.json.calc.struct).click();
				SETTINGS.calc.structGenerate();
			});
		},

		// ->>>


		setScheme: function (scheme) {
			// var themeManager = CALCULATOR.ThemeManager;

			// if(themeManager && themeManager.isThemeAvailable(themeId)) {
			// 	themeManager.setTheme(themeId);
			// 	RANDER.reload();
			// }
		},


		timeOutId: null,


		setTheme: function (themeId) {
			var themeManager = CALCULATOR.ThemeManager;

			if(SETTINGS.timeOutId) {
				clearTimeout(SETTINGS.timeOutId);
				SETTINGS.timeOutId = null;
			}

			if ($('.theme-item').eq(themeId).is('.theme-item--active'))
				return;

			themeManager.showPreloadCss($('.theme-item').eq(themeId));

			if(themeManager && themeManager.isThemeAvailable(themeId)) {
				themeManager.setTheme(themeId);
				themeManager.buttonReload(themeId);
			}
		},


		setStruct: function (struct, no_preload, callback) {
			if (!no_preload)
				$('.loader-zone').show();
			if (!$('.preview'))
				$('body').height($(document).height()); // for scrollbar

			var grids = JSON.parse(JSON.stringify( SETTINGS.calc.structGrids ));
			SAVER.json.lines = grids[struct];

			//if (SERV.userId === 3) console.error(SAVER.json.lines.length);

			SAVER.json.calc.struct = struct;
			$(SAVER.json.lines).each(function() {
				var line_id = this.id;
				$(this.columns).each(function() { // все колонки старой строки
					$(this.fields).each(function() { // проход по всем полям
						$(this).each(function() {
							$(this.fields).each(function() {
								var field = SAVER.getFieldBy('id', this);
								field.L = line_id;
							});
						});
					});
				});
			});
			SETTINGS.calc.memo = 1;

			var setStructCallback = function() {
				/** Проставляем data-struct-memo */
				var panel = $('#viewing_panel'),
					struct_memo = panel.attr('data-struct-memo'),
					struct = SAVER.json.calc.struct;

				if (struct_memo > struct)
					SETTINGS.calc.structDataMemo(struct_memo, struct);
				if (callback)
					callback();
			}
			if (SAVER.history) {
			    // получаем ключи для генерации калка
			    RANDER.waitKeys($('body'), function() {
			        RANDER.preload(setStructCallback); // генерируем сетку
			    });
			}
			else
				RANDER.preload(setStructCallback); // генерируем сетку

			$('.loader-zone').fadeOut(300);

			if (DAT.itsFrame) { // если это фрейм, обращаемся к родителю
				window.parent.SETTINGS.calc.saverFields[struct] = SAVER.json.fields;
			}
		},
		// <<<-
		structGenerate: function(action, need_struct, callback) { // сгенерировать фрейм со структурой калькулятора

			SETTINGS.calc.saverStruct = JSON.parse(JSON.stringify(SAVER.json));
			var for_struct = typeof(need_struct) != 'undefined' ? need_struct: 1,
				struct_max = typeof(need_struct) != 'undefined' ? need_struct: 4,
				struct,
				stopper = 0,
				loadFrame = function(struct, stopper) {
					setTimeout(function() {
						RANDER.waitFrameset(function() {
							if (action == 'overlay') {
								$('#struct-' + struct).contents().find('body').append('<script>DAT.fast = 1;</script>');
							}
							if (action == 'resizer' || action == 'overlay') {
								$('#struct-' + struct).contents().find('body').append('<style>body {overflow: hidden;}</style>\
									<script>\
										SERV = JSON.parse(JSON.stringify(window.parent.SERV));\
										BILLING = JSON.parse(JSON.stringify(window.parent.BILLING));\
										SAVER.json = JSON.parse(JSON.stringify(window.parent.SETTINGS.calc.saverStruct));\
										SAVER.json.calc.theme = JSON.parse(JSON.stringify(window.parent.SAVER.json.calc.theme));\
										SAVER.json.calc.scheme = JSON.parse(JSON.stringify(window.parent.SAVER.json.calc.scheme));\
										SETTINGS.calc.structGrids = JSON.parse(JSON.stringify(window.parent.SETTINGS.calc.structGrids));\
										SAVER.json.lines = JSON.parse(JSON.stringify(window.parent.SETTINGS.calc.structGrids[' + struct + ']));\
										SWAP.calc.struct = JSON.parse(JSON.stringify(window.parent.SWAP.calc.struct));\
										DAT.error = 1;\
										$("html, body").addClass("resize-body").css("overflow", "hidden");\
										$("#viewing_panel").css("max-width", "100%");\
									</script>');
								if (callback)
									document.frame_struct4.SETTINGS.calc.setStruct(struct, 'no_preload', callback);
								else
									document.frame_struct4.SETTINGS.calc.setStruct(struct);
							}
						});
					}, stopper);
				}

			if (SETTINGS.calc.structGrids.length > 0) {
				if (callback)
					callback();
				return false; // различные структуры наготове
			}

			SETTINGS.calc.structGridsNeed(action, need_struct);

			for (struct = for_struct; struct <= struct_max; struct++) {
				loadFrame(struct, stopper);
				stopper += 400;
			}
		},
		structGridsNeed: function(action, need_struct) {
			var count = 0,
				lines = [], // новая структура
				for_struct = 1,
				struct_max = 4,
				panel = $('#viewing_panel'),
				linesParse = function(struct) {
					$(SETTINGS.calc.saverStruct.lines).each(function() {
						var lines_last;
						lines.push( JSON.parse(JSON.stringify(this)) ); // копируем всю строку
						lines_last = lines[lines.length - 1];
						lines_last.columns = []; // удалем колонки и ниже набираем заново
						$(this.columns).each(function() { // все колонки старой строки
							var line_id;
							count++;
							if (count <= struct) {
								lines_last.columns.push( JSON.parse(JSON.stringify(this)) ); // добавляем проверенную колонку в строку
							} else {
								count = 1; // первая колонка в новой строке
								line_id = DAT.newL();
								lines.push({ // создаем новую строку
									columns: [ JSON.parse(JSON.stringify(this)) ], // первая колонка в новой строке
									id: line_id // ид новой строки
								});
								lines_last = lines[lines.length - 1];
							}
						});
						count = 0;

					});

					SETTINGS.calc.structGrids[struct] = JSON.parse(JSON.stringify(lines));
					//if (SERV.userId === 3) console.error(SAVER.json.lines.length);
					lines = []; // новая структура
				};

			for (struct = for_struct; struct <= struct_max; struct++) {
				linesParse(struct);
			}
			SETTINGS.calc.saverStructGrids = JSON.parse(JSON.stringify(SETTINGS.calc.structGrids));
		},
		structDataMemo: function(struct_memo, struct) {
			var lines = SAVER.json.lines,
				lines_memo = SETTINGS.calc.structGrids[struct_memo],
				$lines = $('.grid-line'),
				count = 0,
				count_memo = 0,
				col_length = 0;
			lines.forEach(function(line, i) {
				var m = lines_memo[count_memo].columns.length,
					n = line.columns.length,
					li = $lines.eq(i);

				if (!col_length)
					li.attr('data-clear', '1');
				else
					li.removeAttr('data-clear');

				li.attr('data-col-memo', m+'-'+n);
				col_length += n;

				if (col_length >= m) {
					col_length = 0;
					count_memo++;
				}
			});
		},
		structUpdate: function(action) {
			var old = JSON.stringify(SETTINGS.calc.saverFields[ SAVER.json.calc.struct ]),
				actual = JSON.stringify(SAVER.json.fields),
				struct,
				struct_min = 4,
				struct_max = 4, // сколько фреймов
				stopper = 0, // замедление генерации фреймов
				loadFrame = function(struct, stopper) {
					setTimeout(function() {
						if (action == 'resizer' || action == 'overlay') {
							$('#struct-' + struct).contents().find('body').append('<script>\
									DAT.error = 1;\
									SAVER.json.calc.theme = JSON.parse(JSON.stringify(window.parent.SAVER.json.calc.theme));\
									SAVER.json.calc.scheme = JSON.parse(JSON.stringify(window.parent.SAVER.json.calc.scheme));\
									RANDER.preload();\
									$("#viewing_panel, .design-footer").css("width", "");\
								</script>');
						}
					}, stopper);
				}
			if (old != actual) { // значит мы меняли настройки полей
				$(SAVER.json.fields).each(function(n) { // проход по все полям
					// передаем каждое оле из родительского фрейма в дочерние. Но не передаем параметры L и С
					var field = this,
						field_frame,
						L, C;
					for (struct = struct_min; struct <= struct_max; struct++) {
						field_frame = $('#struct-' + struct)[0].contentWindow.SAVER.json.fields;
						if (field_frame.length == SAVER.json.fields.length) {
							L = field_frame[n].L;
							C = field_frame[n].C;
							$('#struct-' + struct)[0].contentWindow.SAVER.json.fields[n] = JSON.parse(JSON.stringify(field));
							$('#struct-' + struct)[0].contentWindow.SAVER.json.fields[n].L = L;
							$('#struct-' + struct)[0].contentWindow.SAVER.json.fields[n].C = C;
							$('#struct-' + struct).contents().find('body').removeClass("load-end");
						}
					}
				});
				for (struct = struct_min; struct <= struct_max; struct++) {
					loadFrame(struct, stopper);
					stopper += 350;
				}
			}
		},
		// ->>>
		saverStruct: {}, // копия структуры калькулятора
		saverStructGrids: [], // копия вариантов структур калькулятора
		saverFields: [], // копия полей
		structGrids: [], // варианты сетки для разной структуры
		memo: 0 // запоминать ли текущие сетки
	},


	closeCustomPopups: function(fadeDuration) {
		fadeDuration = fadeDuration || 300;
		var createdPopovers = $(".js-custom-popover").filter(":visible");

		if(createdPopovers.length) {
			createdPopovers.fadeOut(fadeDuration);
		}
	},

	openGeneratedPopup: function(popupElement, ofElement, params) {

		if(!params.toggleTriggerElement) {
			console.error("openGeneratedPopup: You must specify the params.toggleTriggerElement option!")
			return;
		}

		$(document).off("mouseup.genTooltip");
		
		var ofElementOffset = ofElement.offset();

		var fadeDuration = params.fadeDuration || 300;
		var createdPopovers = $(".js-custom-popover").filter(":visible");

		$(document).on("mouseup.genTooltip", function(event) {
			var clickedElement = $(event.target);

			/** Кликнули внутри выпадашки */
			if(clickedElement.closest(".js-custom-popover").length) {
				return;
			}

			SETTINGS.closeCustomPopups();

			if(params.onClose) {
				params.onClose();
			}
		});


		if(createdPopovers.length) {
			createdPopovers.fadeOut(fadeDuration, function() {
				createNewPopover();
			});
		} else {
			createNewPopover();
		}

		function createNewPopover() {
			popupElement
				.addClass(params.customPopupClass || "")
				// .removeClass("fixed-in-frame")
				.addClass("js-custom-popover")
				.css({
					"height": "300px",
					"top": ofElementOffset.top + (params.tailTopShift || 0),
					"left": ofElementOffset.left - (params.tailLeftShift || 0)
				})
				.fadeIn(fadeDuration);

			SETTINGS.scrollWrap(popupElement);

			popupElement
				.find('.tooltip-fade')
				.show();

			fitInFrame();

			if(params.onOpen) {
				params.onOpen();
			}
		}


		function fitInFrame() {
			var MAX_FRAME_HEIGHT_TO_FIT = 300;
			var BONUS_OFFSET = 5;

			var frameBody = popupElement.closest("body.its-api");

			if(!frameBody.length)
				return;

			var frameHeight = frameBody.outerHeight();

			var bodyBounds = frameBody[0].getBoundingClientRect();
			var popupBounds = popupElement[0].getBoundingClientRect();
			var ofElementBounds = ofElement[0].getBoundingClientRect();

			/** Низ вылез за окно */
			if(bodyBounds.bottom < popupBounds.bottom + BONUS_OFFSET) {
				if(frameHeight >= MAX_FRAME_HEIGHT_TO_FIT) {
					/** От низа фрейма до низа относительного элемента больше MAX_FRAME_HEIGHT_TO_FIT */
					if(bodyBounds.bottom - ofElementBounds.bottom >= MAX_FRAME_HEIGHT_TO_FIT) {

						/** Упираем в низ фрейма и тянем к низу относительного элемента */
						popupElement.addClass("fixed-in-frame").css({
							"top": ofElementBounds.bottom + 5,
							"bottom": 2,
							// "overflow-y": "scroll"
						});

					} else if (ofElementBounds.bottom >= MAX_FRAME_HEIGHT_TO_FIT) {

						/** Прямо над элементом */
						popupElement.addClass("contry-bottom-arrow tooltip-up").removeClass('tooltip-down').css({
							"top": bodyBounds.top * -1 + ofElementBounds.top - MAX_FRAME_HEIGHT_TO_FIT - 5,
							"bottom": 2,
							// "overflow-y": "scroll"
						});

					} else {
						/** Упираем в низ фрейма и тянем на MAX_FRAME_HEIGHT_TO_FIT px */
						popupElement.addClass("fixed-in-frame").css({
							"top": bodyBounds.bottom - MAX_FRAME_HEIGHT_TO_FIT,
							"bottom": 2,
							// "overflow-y": "scroll"
						});

					}
				} else {
					/** Ресайзим на всю высоту фрейма */
					popupElement.addClass("fixed-in-frame").css({
						"top": 2,
						"bottom": 2,
						// "overflow-y": "scroll"
					}).css("height", frameHeight);


					popupElement.find(".scroll-wrapper").css("height", "inherit");

				}
			}
		}
	},


	// <<<-
	openSettings: function(element, params, callback, callback2) {

		var parent  = $(element).closest('.settings-toplinks'),
			el 	    = $(element),
			content = parent.find('.tooltip'),
			style   = null,
			offset,
			scrolltop,
			winheight,
			toolheight;


		if (el.hasClass('settings-toplinks__li-link--active')) { // если блок открыт, и кликаем по нему же

			SETTINGS.closeTooltip(SETTINGS.event, parent, el);

		} else if (el.closest('[data-id]').hasClass('settings--active')) { // если блок открыт, и кликаем по соседям

			SETTINGS.mousedown_in_tooltip = 1;
			setTimeout(function() {
				SETTINGS.mousedown_in_tooltip = 0;
			}, 600);
			$('[data-id]:not(.settings--active)').find('.tooltip').remove();


			parent.find('.tooltip-fade').attr('data-save-height', parent.find('.tooltip-fade').css('height'));
			/** Нужно не только в родителе удалить, вдруг мы с одного элемента на другой перешли? */
			// parent.find('.settings-toplinks__li-link').removeClass('settings-toplinks__li-link--active');
			$(".settings-toplinks__li-link--active").removeClass("settings-toplinks__li-link--active");

			el.addClass('settings-toplinks__li-link--active');

			if (parent.find('.tooltip .scrollbar-inner').length) { //небольшой костыль для скроллбара
				var content = content.add(parent.find('.tooltip .scroll-content'));
			}
			content.css('height',content.height()+'px');

			parent
				.attr('data-toplink',params.toplink)
				.find('.tooltip .tooltip-fade').fadeOut('300', function(){
					parent.find('.tooltip-fade').html(SETTINGS.htmlBuilder(params));

					if (callback) { callback(element, params.id) }
					if (callback2) { callback2(element, params.id) }

					/**
					 * ТУТ условия для разной высоты у разных тултиов
					 */
					var fade_height = content.find('.tooltip-fade').height();
					var new_height = parent.find('ol').length && fade_height > 300 
								   ? 300 
								   : parent.find('.js-color-chooser').length
								   ? 379
								   : parent.find('.tooltip-radio__item').length && fade_height > 300
								   ? 300
								   : parent.find('.limit').length
								   ? 457
								   : fade_height;

					if (   parent.find('.js-color-chooser').length
						|| parent.find('.tooltip-radio__item').length)
						SETTINGS.scrollWrap(parent.find('.tooltip'));

					parent.find('.scroll-content').stop().css({
						'height': parent.find('.tooltip-fade').height() + 'px',
						'max-height': parent.find('.tooltip-fade').height() + 'px'
					});

					parent.find('.scroll-wrapper').stop().css({
						'height': new_height + 'px',
						'max-height': new_height + 'px'
					});

					parent.find('.tooltip').animate({
						'height': new_height + 'px'
					}, 300);

					parent.find('.tooltip-fade').fadeIn('300', function() {

						SETTINGS.setPosition(parent, 'change');
						SETTINGS.bodyPaddingBottom(parent.find('.tooltip .tooltip-fade'));

						$('.tooltip-units__prev').parent()
							.css('cursor', 'pointer')
							.on('mouseup.tooltopOpen', function(e) {
								if ($(e.target).is('.list-add'))
									return;
								$('.tooltip-units__prev', this).trigger('click');
							});

					});
				});

			$('.ub-tooltip').fadeOut(300, function() {
				$(this).remove();
			})

			SETTINGS.helperPostion(parent);

		} else { // если блок не открыт

			$('.arrow-transition').removeClass('arrow-transition');

			$('[data-id]:not(.settings--active)').find('.tooltip').remove();

			/** Нужно не только в родителе удалить, вдруг мы с одного элемента на другой перешли? */
			$(".settings-toplinks__li-link--active").removeClass("settings-toplinks__li-link--active");

			el.closest('[data-id]').addClass('settings--active');
			el.addClass('settings-toplinks__li-link--active');



			if (parent.closest('.grid-column').index() == parent.closest('.grid-column').siblings().length) { // и если это послелний элемент в строке
				style = 'right:0;';
			} else {

				// if(params.zeroLeftPosition) {
				// 	// style = 'left:0;';
				// } else {
				if (!params.dontsetleft) {
					style = 'left:-'+ (30* (4-parent.find('.settings-toplinks__li').length)) + 'px;';
				}
				// }
				// console.log("LEFT", (34* (2-parent.find('.settings-toplinks__li').length)))
			}

			parent
				.attr('data-toplink',params.toplink)
				.append('<div class="tooltip" style="'+style+'"><div class="tooltip-fade">'+SETTINGS.htmlBuilder(params)+'</div></div>')
				.find('.tooltip').fadeIn('300')
				.find('.tooltip-fade').show();
			
			if (parent.find('.js-color-chooser').length) {
				parent.find('.tooltip').css({
					'height': '379px'
				});			
			}
			if (   parent.find('.tooltip-radio__item').length
				|| parent.find('.list-point').length > 3) {
				parent.find('.tooltip').css({
					'height': '300px'
				});
			}
			if (   parent.find('.js-color-chooser').length
				|| parent.find('.tooltip-radio__item').length)
				SETTINGS.scrollWrap(parent.find('.tooltip'));

			$('body').mouseup(SETTINGS.runCloseTooltip);
			setTimeout(function() {
				SETTINGS.setPosition(parent);
				SETTINGS.tooltipShow(parent);
			}, 1);

			if (params.type == 'button')
				parent.find('.tooltip').addClass('tooltip-larg');
		}

		$('.tooltip').each(function() {
			if (!$(this).parent().is(parent)) {
				$(this).fadeOut('300');
				$(this).closest('[data-id]').removeClass('settings--active')
					.find('.settings-toplinks').removeClass('settings-up settings-down')
			}
			else {
				setTimeout(function() {
					$('ol.tooltip-units').on('mousedown', '.drag-li', function(event) {
						var clickedLi = $(event.target).closest("li");
						DnDtooltip.start(event, clickedLi, 'ol.tooltip-units li');
					});
				}, 500);
			}
		});

		// z-index-off
		/*parent.find('.tooltip').closest('[data-id]').css('z-index', DAT.zIndex() + 100);*/
		if (callback) { callback(element, params.id) }
		if (callback2) { callback2(element, params.id) }

		$('.valid-number').on("change keyup input click", function() {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
		$('.valid-number-drob').on("change keyup input click", function() {
			if (this.value.match(/[^0-9\.]/g)) {
				this.value = this.value.replace(/,/g, '.')
					.replace(/[^0-9\.]/g, '')
					.replace(/([0-9]+)\./g, '$1@')
					.replace(/\./g, '')
					.replace(/@/g, '.');
			}
		});
	},
	htmlBuilder: function(params) {

		var checked,    // needed for checkboxes and radio
			html = '<h4 class="js-popup-title">'+params.title+'</h4>';

		if (params.cls && params.addBtn) {	// нужно для селекта
			html = '<h4 class="js-popup-title">'+params.title+params.addBtn+'</h4>';
		}

		if (params.listitems)
			html += '<ol class="tooltip-units">';
		else
			html += '<ul class="tooltip-units js-tooltip-units-container">';

		if (params.hasOwnProperty("titleSwitcher")) {
			html += SETTINGS.checkItemTpl(loc["Заголовок"], "titleSwitcher", "block", params);
		}

		if (params.hasOwnProperty("descSwitcher")) {
			html += SETTINGS.checkItemTpl(loc["Описание"], "descSwitcher", "block", params);
		}

		if (params.hasOwnProperty("importantSwitcher")) {
			html += SETTINGS.checkImportantTpl(loc["Обязательное поле"], "importantSwitcher", "*", params);
		}

		if (params.hasOwnProperty("tooltip")) {
			html += ['<li>'
						,'<p class="cursor-default">' + loc["Укажите текст, который будет подсказкой при заполнении поля"] + '</p>'
						,'<input type="text" '
							,'class="input-field input-field-text list-point__name js-tooltip-holder-for-[type]-[id]" '
							,'value="[tooltip]" '
							,'onclick="FIELDS.[type].focusTooltip(this)" '
							,'onblur="FIELDS.[type].blurTooltip(this,[id])" '
							,'oninput="FIELDS.[type].changeTooltip(this,[id])" '
							,'placeholder="'+FIELDS[params.type].signe.tooltip+'">'
					,'</li>']
					.join('');

		}
		if (params.hasOwnProperty("title_settings")) {
			html += ['<li>'
						,'<p class="cursor-default">' + loc["Подсказка при наведении"] + '</p>'
						,'<input type="text" '
							,'class="input-field input-field-text large-padding" '
							,'value="[title_settings]" '
							,'oninput="FIELDS.[type].changeTitle(this,[id])" '
							,'placeholder="'+FIELDS[params.type].signe.title+'">'
					,'</li>']
					.join('');

		}
		if (params.hasOwnProperty("paddingLR")) {
			html += ['<li>'
					,'<div class="switcher">'
						,'<div class="switcher-item switcher-item__left">'
							,'<input type="radio" '
								,'name="radioswitcher" '
								,'id="padding0-[type]-[id]" '
								,'value="0" '
								,(params.paddingLR ? '' : 'checked="checked" ')
								,'onchange="SETTINGS.changePadding(this,[id])">'
							,'<label for="padding0-[type]-[id]"></label>'
						,'</div>'
						,'<div class="switcher-item switcher-item__right">'
							,'<input type="radio" '
								,'name="radioswitcher" '
								,'id="padding1-[type]-[id]" '
								,'value="24" '
								,(params.paddingLR ? 'checked="checked" ' : '')
								,'onchange="SETTINGS.changePadding(this,[id])">'
							,'<label for="padding1-[type]-[id]"></label>'
						,'</div>'
					,'</div>'
				,'</li>']
				.join('');
		}
		if (params.hasOwnProperty("paddingTop")) {    //  hasOwnProperty нужен потому что отступ также может быть нулевым
			html += SETTINGS.sliderBuildTpl(loc["Сверху"], 'paddingTop', 2, 0, 50, 1);
		}
		if (params.hasOwnProperty("paddingBottom")) {
			html += SETTINGS.sliderBuildTpl(loc["Снизу"], 'paddingBottom', 2, 0, 50, 1);
		}
		if (params.hasOwnProperty("height")) {
			html += SETTINGS.sliderBuildTpl(loc["Высота"], 'height', 4, 200, 1000, 1);
		}
		if (params.theme) {
			html += '<li>'
						+'<div class="theme">'
							+'<a href="javascript://" onclick="SETTINGS.calc.setTheme(0)" class="theme-item theme-item-default">'
								+'<div class="theme-item__img"><img src="/templates/layout/img/theme/'+SERV.this_lang+'-1.jpg?2" alt=""></div>'
								+'<span class="theme-item__name">'+"Default"+'</span>'
							+'</a>'
							+'<a href="javascript://" onclick="SETTINGS.calc.setTheme(1)" class="theme-item theme-item-minimal">'
								+'<div class="theme-item__img"><img src="/templates/layout/img/theme/'+SERV.this_lang+'-2.jpg?2" alt=""></div>'
								+'<span class="theme-item__name">'+"Minimalist"+'</span>'
							+'</a>'
							+'<a href="javascript://" onclick="SETTINGS.calc.setTheme(2)" class="theme-item theme-item-material">'
								+'<div class="theme-item__img"><img src="/templates/layout/img/theme/'+SERV.this_lang+'-3.jpg?2" alt=""></div>'
								+'<span class="theme-item__name">'+"Material"+'</span>'
							+'</a>'
							+'<a href="javascript://" onclick="SETTINGS.calc.setTheme(3)" class="theme-item theme-item-bootstrap">'
								+'<div class="theme-item__img"><img src="/templates/layout/img/theme/'+SERV.this_lang+'-4.jpg?2" alt=""></div>'
								+'<span class="theme-item__name">'+"Bootstrap"+'</span>'
							+'</a>'
							+'<div class="clearfix"></div>'
						+'</div>'
						+'<div class="theme-fonts"><i>i</i><i>i</i><i>i</i><i>i</i></div>'
					+'</li>';
		}
		if (params.scheme) {

			html += '<div class="js-color-chooser theme-color-chooser"></div>'; 

					// '<li>\
					// 	<div class="scheme">\
					// 		<span class="scheme-name">' + loc["Бесплатные"] + '</span>\
					// 		<div class="clearfix">\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'free1\')" class="scheme-item scheme-item-free1"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'free2\')" class="scheme-item scheme-item-free2"><span></span><span></span><span></span><span></span><span></span></a>\
					// 		</div>\
					// 		<div class="clearfix">\
					// 			<div class="pull-left"><span class="scheme-name">' + loc["Премиум"] + '</span></div>\
					// 			<div class="pull-right scheme-price">199 Р</div>\
					// 		</div>\
					// 		<div class="clearfix">\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium1\')" class="scheme-item scheme-item-premium1"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium2\')" class="scheme-item scheme-item-premium2"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium3\')" class="scheme-item scheme-item-premium3"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium4\')" class="scheme-item scheme-item-premium4"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium5\')" class="scheme-item scheme-item-premium5"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium6\')" class="scheme-item scheme-item-premium6"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium7\')" class="scheme-item scheme-item-premium7"><span></span><span></span><span></span><span></span><span></span></a>\
					// 			<a href="javascript://" onclick="SETTINGS.calc.setScheme(\'premium8\')" class="scheme-item scheme-item-premium8"><span></span><span></span><span></span><span></span><span></span></a>\
					// 		</div>\
					// 	</div>\
					// </li>'
		}
		if (params.bg) {
			html += ['<li>'
						,'<div class="colorset no-alpha">'
							,'<input class="colorPicker js-disable-alpha" href="javascript://" data-color="[bgColor]" data-container="true" hidden />'
						,'</div>'
					,'</li>']
					.join('');
		}
		if (params.struct) {
			html += ['<li>'
						,'<ul class="structure">'
							,'<li class="structure-item">'
								,'<input type="radio" name="radio" id="structure-item1">'
								,'<label for="structure-item1" onclick="SETTINGS.calc.setStruct(1)">'
									,'<span class="table">'
										,'<span></span>'
									,'</span>'
								,'</label>'
							,'</li>'
							,'<li class="structure-item">'
								,'<input type="radio" name="radio" id="structure-item2">'
								,'<label for="structure-item2" onclick="SETTINGS.calc.setStruct(2)">'
									,'<span class="table">'
										,'<span></span><span></span>'
									,'</span>'
								,'</label>'
							,'</li>'
							,'<li class="structure-item">'
								,'<input type="radio" name="radio" id="structure-item3">'
								,'<label for="structure-item3" onclick="SETTINGS.calc.setStruct(3)">'
									,'<span class="table">'
										,'<span></span><span></span><span></span>'
									,'</span>'
								,'</label>'
							,'</li>'
							,'<li class="structure-item">'
								,'<input type="radio" name="radio" id="structure-item4">'
								,'<label for="structure-item4" onclick="SETTINGS.calc.setStruct(4)">'
									,'<span class="table">'
										,'<span></span><span></span><span></span><span></span>'
									,'</span>'
								,'</label>'
							,'</li>'
						,'</ul>'
					,'</li>']
					.join('');
		}

		/* input_text */
		if (params.typeChange) {

			html += ['<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio2__[type]-[id]" value="number">'
						,'<label for="tooltip-radio2__[type]-[id]">' + loc["Числовое"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio1__[type]-[id]" value="text">'
						,'<label for="tooltip-radio1__[type]-[id]">' + loc["Текстовое"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio3__[type]-[id]" value="textarea">'
						,'<label for="tooltip-radio3__[type]-[id]">' + loc["Большое текстовое"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio4__[type]-[id]" value="email">'
						,'<label for="tooltip-radio4__[type]-[id]">' + loc["E-mail адрес"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio5__[type]-[id]" value="tel">'
						,'<label for="tooltip-radio5__[type]-[id]">' + loc["Номер телефона"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio6__[type]-[id]" value="date">'
						,'<label for="tooltip-radio6__[type]-[id]">' + loc["Дата"] + '</label>'
					,'</li>'
					,'<li class="tooltip-radio__item">'
						,'<input [attr] id="tooltip-radio7__[type]-[id]" value="time">'
						,'<label for="tooltip-radio7__[type]-[id]">' + loc["Время"] + '</label>'
					,'</li>']
					.join('')
					.Signe({attr: 'type="radio" name="designradio[type]-[id]" onchange="SETTINGS.changeInput(this,[id])"'});
		}

		/* selector|input_checkbox|input_radio|filials|countries|cities */
		if (params.listitems) {
			var field = SAVER.getFieldBy('id', params.id);
			var _updHTML = function(prop) {
				field[prop].forEach(function(opt, i) {
					html += SETTINGS.tmplTooltipOpt[params.type].Signe(opt).Signe(params).Signe({i: i});
				});
			}
			if (params.hasOwnProperty("typeOpt")) {
				if (field.hasOwnProperty(params.typeOpt))
					_updHTML(params.typeOpt);
			}
			else
				_updHTML("options");
		}

		/* slider */
		if (params.hasOwnProperty("rangeSwitcher")) {
			html += SETTINGS.checkItemTpl(loc["Цифры диапазона"], "rangeSwitcher", "inline", params);
		}
		if (params.step) {
			html += ['<li>'
						,'<div class="overflow from-input">'
							,'<div class="pull-left">' + loc["Диапазон"] + '</div>'
							,'<div class="pull-right tooltip-inner__result">'
								,'<input type="text" class="valid-number-drob js-tooltip-slider-min" maxlength="10" value="[min]">'
								,' – '
								,'<input type="text" class="valid-number-drob js-tooltip-slider-max" maxlength="10" value="[max]">'
							,'</div>'
						,'</div>'
					,'</li>']
					.join('');
		}
		if (params.step) {
			html += ['<li>'
						,'<div class="overflow from-input">'
							,'<div class="pull-left">' + loc["Шаг"] + '</div>'
							,'<div class="pull-right tooltip-inner__result">'
								,'<input type="text" class="valid-number-drob js-tooltip-slider-step" maxlength="10" value="[step]">'
							,'</div>'
						,'</div>'
					,'</li>']
					.join('');
		}

		/* button */
		switch (params.action) {
			/* <!--BUTTON--> */
			case "button-settings":
				html +=  '<li>'
							+'<p class="cursor-default">' + loc["Укажите сообщение об успешной отправке"]  + '</p>'
							+'<input type="text" class="input-field input-field-text list-point__name js-btn-done-text-field" value="[btnDoneText]" placeholder="">'
						+'</li>'
						+'<li class="tooltip-units__link" data-action="accept"><h5>' + loc["Согласие на сбор данных"] + '</h5></li>'
						;
				break;
			case 'actions':
				html +=  '<li class="tooltip-units__link" data-action="sendAdmin"><h5>' + loc["Оповещение владельца"] + '</h5></li>'
						+'<li class="tooltip-units__link" data-action="sendUser"><h5>' + loc["Уведомление клиента"] + '</h5></li>'
						+'<li class="tooltip-units__link" data-action="openLink"><h5>' + loc["Переход по ссылке"] + '</h5></li>'
						+'<li class="tooltip-units__link" data-action="payment"><h5>' + loc["Переход к оплате"] + '</h5></li>'
						;
				break;
			case 'sendAdmin':
				html += ['<li>'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Оповещать"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="notification" ' + (params.data.sendAdmin ? 'checked': '') + '>'
									,'<label for="notification"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link" data-action="adminEmail"><h5>' + loc["Эл. почта получателя"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="adminTel"><h5>' + loc["Телефон получателя"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="adminEmailTemplate"><h5>' + loc["Шаблон уведомления EMAIL"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="adminSmsTemplate"><h5>' + loc["Шаблон уведомления SMS"] + '</h5></li>'
						,'<li class="tooltip-units__limits">'
							,'<h5>' + loc["Лимиты оповещений"] + '</h5>'
							,'<div class="limit_box">'
								,'<div class="limit limit-1">'
									,'<div class="clip1">'
										,'<div class="slice1" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<div class="clip2">'
										,'<div class="slice2" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<h6>Email</h6>'
									,'<div class="status"><p><span class="limit-x">0</span> ' + loc["из"] + ' <span class="limit-of">500</span></p></div>'
								,'</div>'
								,'<a href="javascript://" class="limit-add" onclick=""></a>'
							,'</div>'
							,'<div class="limit_box">'
								,'<div class="limit limit-2">'
									,'<div class="clip1">'
										,'<div class="slice1" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<div class="clip2">'
										,'<div class="slice2" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<h6>SMS</h6>'
									,'<div class="status"><p><span class="limit-x">0</span> ' + loc["из"] + ' <span class="limit-of">50</span></p></div>'
								,'</div>'
								,'<a href="javascript://" class="limit-add" onclick=""></a>'
							,'</div>'
						,'</li>']
						.join('');
				break;
			case 'sendUser':
				html += ['<li>'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Оповещать"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="notification" ' + (params.data.sendUser ? 'checked': '') + '>'
									,'<label for="notification"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link" data-action="userEmail"><h5>' + loc["Источник email адреса"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="userTel"><h5>' + loc["Источник номера телефона"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="userEmailTemplate"><h5>' + loc["Шаблон уведомления EMAIL"] + '</h5></li>'
						,'<li class="tooltip-units__link" data-action="userSmsTemplate"><h5>' + loc["Шаблон уведомления SMS"] + '</h5></li>'
						,'<li class="tooltip-units__limits">'
							,'<h5>' + loc["Лимиты оповещений"] + '</h5>'
							,'<div class="limit_box">'
								,'<div class="limit limit-1">'
									,'<div class="clip1">'
										,'<div class="slice1" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<div class="clip2">'
										,'<div class="slice2" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<h6>Email</h6>'
									,'<div class="status"><p><span class="limit-x">0</span> ' + loc["из"] + ' <span class="limit-of">500</span></p></div>'
								,'</div>'
								,'<a href="javascript://" class="limit-add" onclick=""></a>'
							,'</div>'
							,'<div class="limit_box">'
								,'<div class="limit limit-2">'
									,'<div class="clip1">'
										,'<div class="slice1" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<div class="clip2">'
										,'<div class="slice2" style="transform: rotate(0deg); zoom: 1;"></div>'
									,'</div>'
									,'<h6>SMS</h6>'
									,'<div class="status"><p><span class="limit-x">0</span> ' + loc["из"] + ' <span class="limit-of">50</span></p></div>'
								,'</div>'
								,'<a href="javascript://" class="limit-add" onclick=""></a>'
							,'</div>'
						,'</li>']
						.join('');
				if (!BILLING.clientSend)
					html += '<div class="tooltip-msg-bg"><div class="permission-msg">'  + loc["Оповещения клиента доступны только в платном тарифе"] + SERV.tariffBtn + '</div></div>';
				break;
			case 'openLink':
				html += ['<li>'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Переходить"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="link-active" ' + (params.data.linkActive ? 'checked': '') + '>'
									,'<label for="link-active"></label>'
								,'</div>'
							,'</div>'
						,'</li>']
						.join('');
				html += ['<li class="tooltip-units__link is-not-link">'
							,'<p>' + loc["Укажите ссылку, которая при нажатии откроется в новой вкладке"] + '</p>'
							,'<input type="text" name="link-input" id="link-input" placeholder="http://example.com" value="[link]" data-valid="url">'
						,'</li>']
						.join('');
				if (!BILLING.openLink)
					html += '<div class="tooltip-msg-bg"><div class="permission-msg">' + loc["Переход по ссылке доступен только в платном тарифе"] + SERV.tariffBtn + '</div></div>';
				break;
				// payment
			/*case 'payment':
				html += '<li><div class="textswitcher"><div class="pull-left">Оплачивать</div><div class="pull-right textswitcher-item"><input type="checkbox" id="payment-active" ' + (params.data.payment ? 'checked': '') + '><label for="payment-active"></label></div></div></li>';
				html += '<li class="tooltip-units__link" data-action="paymentSettings"><h5>Настройки</h5></li>';
				html += '<li class="tooltip-units__link" data-action="amount"><h5>Источник суммы</h5></li>';
				break;*/
			case 'payment':
				html += ['<li class="tooltip-radio__item radio-right">'
							,'<input [attr] id="tooltip-radio2__[type]-[id]" value="none">'
							,'<label for="tooltip-radio2__[type]-[id]">' + loc["Отключен"] + '</label>'
						,'</li>'
						,'<li class="tooltip-radio__item radio-right">'
							,'<input [attr] id="tooltip-radio4__[type]-[id]" value="PayPal">'
							,'<label for="tooltip-radio4__[type]-[id]">' + "PayPal" + '</label>'
						,'</li>'
						,'<li class="tooltip-radio__item radio-right">'
							,'<input [attr] id="tooltip-radio1__[type]-[id]" value="yaCassa">'
							,'<label for="tooltip-radio1__[type]-[id]">' + loc["Яндекс.Касса"] + '</label>'
						,'</li>'
						,'<li class="tooltip-radio__item radio-right">'
							,'<input [attr] id="tooltip-radio3__[type]-[id]" value="yaMoney">'
							,'<label for="tooltip-radio3__[type]-[id]">' + loc["Яндекс.Деньги"] + '</label>'
						,'</li>'
						,'<li class="tooltip-units__link tooltip-units__settings" data-action="[payment]Settings">'
							,'<h5>' + loc["Настройки"] + '</h5>'
						,'</li>'
						,'<li class="tooltip-units__link" data-action="amount">'
							,'<h5>' + loc["Источник суммы"] + '</h5>'
						,'</li>']
						.join('')
						.Signe({attr: 'type="radio" name="designradio[type]-[id]" onchange="SETTINGS.changePayment(this,[id])"'})
						.Signe(params);
				if (!BILLING.pay)
					html += '<div class="tooltip-msg-bg"><div class="permission-msg">' + loc["Прием платежей доступен в премиум-версии"] + SERV.tariffBtn + '</div></div>';
				break;
			case 'accept':
				html += ['<li>'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Активировать"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="accept" ' + (params.data.accept ? 'checked': '') + '>'
									,'<label for="accept"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link is-not-link accept-standart">'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Типовой документ"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="acceptStandart" ' + (params.data.acceptStandart ? 'checked': '') + '>'
									,'<label for="acceptStandart"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link editor-link" data-ub-title="' + loc["Отключите типовой документ"] + '" data-ub-pos="left">'
							,'<h5>' + loc["Редактор документа"] + '</h5>'
						,'</li>'
						].join('');
				break;
			/*case 'calculate':
			 html += '<li><div class="textswitcher"><div class="pull-left">Рассчитывать</div><div class="pull-right textswitcher-item"><input type="checkbox" id="calculate-active" ' + (params.data.calculateActive ? 'checked': '') + '><label for="calculate-active"></label></div></div></li>';
			 html += '<li><p>Выберите результат, который будет рассчитываться по нажатию на кнопку</p><ul class="tooltip-result-list" id="calculate-select">';
			 for (var i in SAVER.json.results) if (SAVER.json.results.hasOwnProperty(i)) html += '<li class="' + (params.data.calculate == SAVER.json.results[i].id  ? 'selected': '') + '" data-value="' + SAVER.json.results[i].id + '">' + SAVER.json.results[i].name_text + '</li>';
			 html += '</ul></li>';
			 break;*/
			case 'adminEmail':
				if (   typeof params.data.adminEmail != 'undefined'
					&& (   params.data.adminEmail == ""
						|| params.data.adminEmail.join('') == "")
					|| typeof params.data.adminEmail == 'undefined')
					html += ['<li id="admin-tel-container">'
								,'<div align="center">'
									,'<p>' + loc["Пока почтовых адресов нет"] + '</p>'
									,'<p><a href="javascript://" onclick="$(\'.list-add\').click();">' + loc["Добавить адрес"] + '</a></p>'
								,'</div>'
							,'</li>']
							.join('');
				else
					for (var i in params.data.adminEmail) if (params.data.adminEmail.hasOwnProperty(i) && typeof params.data.adminEmail[i] != 'undefined' && params.data.adminEmail[i] !== null && params.data.adminEmail[i] !== '') html += '<li class="fade-list"><div class="list-point"><input type="text" class="input-field input-field-text list-point__name email-input" data-value-id="' + i + '" placeholder="admin@example.com" value="' + params.data.adminEmail[i] + '"><a class="list-point__remove" href="javascript://"></a></div></li>';
				if (!BILLING.adminEmail)
					html += '<div class="permission-msg permission-msg-arrow">' + loc["В бесплатной версии можно указать только одного получателя"] + SERV.tariffBtn + '</div>';
				break;

			case 'userEmail':
				var fieldsHtml = '';
				for (var i in SAVER.json.fields) {
					if (   SAVER.json.fields.hasOwnProperty(i) 
						&& SAVER.json.fields[i].type == 'input_text' 
						&& (   SAVER.json.fields[i].typeChange == 'text' 
							|| SAVER.json.fields[i].typeChange == 'email' 
							|| SAVER.json.fields[i].typeChange == 'number')) 
						fieldsHtml += ['<li class="' + (params.data.userEmail == SAVER.json.fields[i].id  ? 'selected': '') + '" '
											,'data-value="[id]" '
											,'data-typechange="[typeChange]" '
											,'style="float:left;">'
												,'<span style="display:inline-block;background:#ff5c5c;border-radius:3px;width:20px;height:24px;line-height:24px;text-align:center;color:#fff;margin:2px 8px 0 0;">'
													,'[litera]'
												,'</span>'
												,'[group_text]'
										,'</li>'
										,'<a class="material-icons nuzzle" '
											,'href="javascript://" '
											,'data-nuzzle-to="[id]">'
												,'visibility'
										,'</a>'
										,'<div style="clear:both;"></div>']
										.join('')
										.Signe(SAVER.json.fields[i]);
				}
				if (fieldsHtml) {
					fieldsHtml = '<ul class="tooltip-result-list" id="email-select">' + fieldsHtml + '</ul>';
				} else {
					fieldsHtml = '<p style="color:gray;">' + loc["Значения отсутствуют"] + '</p>';
				}

				html += ['<li>'
							,'<p>' + loc["Необходимо выбрать поле, в которое ваши пользователи вводят свой email адрес"] + '</p>'
							,fieldsHtml
						,'</li>']
						.join('');
				break;
			case 'adminTel':
				html += '<li id="admin-tel-container"><div align="center"><p>' + loc["Пока номеров нет"] + '</p><p><a href="javascript://" data-action="adminTelAdd">' + loc["Добавить номер"] + '</a></p></div></li>';
				if (!BILLING.sms)
					html += '<div style="height: 60px"></div><div class="tooltip-msg-bg"><div class="permission-msg">' + loc["Уведомления по смс доступны только в платном тарифе"] + SERV.tariffBtn + '</div></div>';
				break;
			case 'adminTelAdd':
				html += ['<li>'
							,'<p>' + loc["Необходимо подтвердить номер телефона. На указанный номер будет отправлен код:"] + '</p>'
							,'<div class="list-point_has-margin"><input type="text" id="tel-input" class="text-small" placeholder="+_ (___) ___-__-__"></div>'
							,'<div id="tel-code-div" class="list-point_has-margin" hidden>'
								,'<p>' + loc["Введите код"] + '</p>'
								,'<div><input type="text" id="tel-code-input" class="text-small" placeholder="12345"></div>'
								,'<p id="tel-code-error"></p>'
							,'</div>'
							,'<button class="btn-green" id="tel-code-send" hidden disabled>' + loc["Подтвердить"] + '</button>'
							,'<div class="time-left"></div>'
							,'<button class="btn-green" id="tel-code-request">' + loc["Отправить код"] + '</button>'
						,'</li>']
						.join('');
				if (SERV.isTrial)
					html += '<div style="height: 60px"></div><div class="tooltip-msg-bg"><div class="permission-msg">' + loc["В триал-версии отсутствует возможность привязать телефон"] + SERV.tariffBtn + '</div></div>';
				break;
			case 'userTel':
				html += '<li><p>' + loc["Необходимо выбрать поле калькулятора, в которое ваши пользователи вводят свой номер телефона"] + '</p>';
				var fieldsHtml = '';
				for (var i in SAVER.json.fields) if (SAVER.json.fields.hasOwnProperty(i) && SAVER.json.fields[i].type == 'input_text' && (SAVER.json.fields[i].typeChange == 'tel' || SAVER.json.fields[i].typeChange == 'number')) fieldsHtml += '<li class="' + (params.data.userTel == SAVER.json.fields[i].id  ? 'selected': '') + '" data-value="' + SAVER.json.fields[i].id + '" data-typechange="' + SAVER.json.fields[i].typeChange + '" style="float:left;"><span style="display:inline-block;background:#ff5c5c;border-radius:3px;width:20px;height:24px;line-height:24px;text-align:center;color:#fff;margin:2px 8px 0 0;">' + SAVER.json.fields[i].litera + '</span>' + SAVER.json.fields[i].group_text + '</li><a class="material-icons nuzzle" href="javascript://" data-nuzzle-to="' + SAVER.json.fields[i].id + '">visibility</a><div style="clear:both;"></div>';
				if (fieldsHtml) {
					fieldsHtml = '<ul class="tooltip-result-list" id="tel-select">' + fieldsHtml + '</ul>';
				} else {
					fieldsHtml = '<p style="color:gray;">' + loc["Значения отсутствуют"] + '</p>';
				}
				html += fieldsHtml;
				html += '</li>';
				break;

			case 'adminEmailTemplate':
			case 'userEmailTemplate':
				if (params.action == 'adminEmailTemplate')
					var subj = SAVER.getFieldBy('id', params.id).adminEmailSubj;
				else
					var subj = SAVER.getFieldBy('id', params.id).userEmailSubj;

				html += ['<li class="tooltip-units_textual">'
							,'<h5>' + loc["Тема письма"] + '</h5>'
							,'<input placeholder="' + loc["Тема письма"] + '" type="text" id="email-template-subj" class="input-field input-noborder input-field-text" value="[subj]">'
						,'</li>']
						.join('')
						.Signe({subj: subj});

				if (params.action == 'userEmailTemplate') {
					var replyto = SAVER.getFieldBy('id', params.id).replyto;
					if (replyto == 'noreply@ucozmail.com')
						replyto = SERV.userEmail != "" ? SERV.userEmail : 'noreply@ucozmail.com';

					html += ['<li class="tooltip-units_textual">'
								,'<h5>' + loc["Отправитель"] + '</h5>'
								,'<input placeholder="' + loc["Отправитель"] + '" type="text" id="email-template-replyto" class="input-field input-noborder input-field-text" value="[replyto]">'
							,'</li>']
							.join('')
							.Signe({replyto: replyto});
				}

				var fields = HIGHLIGHTER.fields();
				var addFieldsHtml = [];
				for (var i in fields) {
					addFieldsHtml.push('<a href="javascript://" class="color-' + fields[i].type + '" data-insert-text="<' + fields[i].name.replace(/\"/g, '&quot;') + '>">' + fields[i].name + '</a>');
				}
				var results = [];
				for (var i in SAVER.json.results) {
					if (SAVER.json.results.hasOwnProperty(i)) {
						results[i] = '<a href="javascript://" class="color-var" data-insert-text="<[name_text]>">[name_text]</a>'
									.Signe(SAVER.json.results[i]);
					}
				}
				html += ['<li class="tooltip-units_textual">'
							,'<h5>' + loc["Текст"] + '</h5>'
							,'<div style="position:relative;overflow:hidden;">'
								,'<div id="email-template-input-highlighted" style="position:static;overflow:hidden;width:100%;padding:0;margin:0;border:0;outline:0;background:transparent;resize:none;line-height:24px;font-size:14px;white-space:pre-wrap;"></div>'
								,'<textarea id="email-template-input" spellcheck="false" style="-webkit-text-fill-color:transparent;position:absolute;top:0;left:0;overflow:hidden;width:100%;padding:0;margin:0;border:0;outline:0;background:transparent;resize:none;line-height:24px;font-size:14px;white-space:pre-wrap;"></textarea>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units_textual">'
							,'<h5>' + loc["Доступные переменные"] + '</h5>'
							,'<p>'
								,'<a href="javascript://" class="color-var" data-insert-text="<' + loc["Название проекта"] + '>">' + loc["Название проекта"] + '</a>, '
								,'<a href="javascript://" class="color-var" data-insert-text="<' + loc["Адрес сайта"] + '>">' + loc["Адрес сайта"] + '</a>'
							,'</p>'
							,fields.length ? ('<p>' + addFieldsHtml.join(', ') + '</p>') : ''
						,'</li>'
						,'<li class="tooltip-units_textual">'
							,'<h5>' + loc["Доступные вычисления"] + '</h5>'
							,results.length ? ('<p>' + results.join(', ') + '</p>') : ''
						,'</li>']
						.join('');

				var fade = $('.settings--active .tooltip-fade');
				fade.css('max-height', fade.css('height'));
				setTimeout(function() {
					fade.css('max-height', '')
						.css('height', fade.css('height'));
					SETTINGS.checkScrollbar(fade[0], 460);
				}, 0);
				break;

			case 'adminSmsTemplate':
			case 'userSmsTemplate':
				var fields = HIGHLIGHTER.fields();
				var addFieldsHtml = [];
				for (var i in fields) {
					addFieldsHtml
					.push('<a href="javascript://" class="color-' + fields[i].type + '" data-insert-text="<' + fields[i].name.replace(/\"/g, '&quot;') + '>">' + fields[i].name + '</a>');
				}
				var results = [];
				for (var i in SAVER.json.results) {
					if (SAVER.json.results.hasOwnProperty(i)) {
						results[i] = '<a href="javascript://" class="color-var" data-insert-text="<[name_text]>">[name_text]</a>'
									.Signe(SAVER.json.results[i]);
					}
				}
				html += ['<li class="tooltip-units_textual">'
							,'<h5>' + loc["Текст"] + '</h5>'
							,'<div style="position:relative;overflow:hidden;">'
								,'<div id="email-template-input-highlighted" style="position:static;overflow:hidden;width:100%;padding:0;margin:0;border:0;outline:0;background:transparent;resize:none;line-height:24px;font-size:14px;white-space:pre-wrap;"></div>'
								,'<textarea id="email-template-input" spellcheck="false" style="-webkit-text-fill-color:transparent;position:absolute;top:0;left:0;overflow:hidden;width:100%;padding:0;margin:0;border:0;outline:0;background:transparent;resize:none;line-height:24px;font-size:14px;white-space:pre-wrap;"></textarea>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units_textual">'
							,'<h5>' + loc["Доступные переменные"] + '</h5>'
							,'<p>'
								,'<a href="javascript://" class="color-var" data-insert-text="<' + loc["Название проекта"] + '>">' + loc["Название проекта"] + '</a>, '
								,'<a href="javascript://" class="color-var" data-insert-text="<' + loc["Адрес сайта"] + '>">' + loc["Адрес сайта"] + '</a>'
							,'</p>'
							,fields.length ? ('<p>' + addFieldsHtml.join(', ') + '</p>') : ''
						,'</li>'
						,'<li class="tooltip-units_textual">'
							,'<h5>' + loc["Доступные вычисления"] + '</h5>'
							,results.length ? ('<p>' + results.join(', ') + '</p>') : ''
						,'</li>']
						.join('');
				
				var fade = $('.settings--active .tooltip-fade');
				fade.css('max-height', fade.css('height'));
				setTimeout(function() {
					fade.css('max-height', '')
						.css('height', fade.css('height'));
					SETTINGS.checkScrollbar(fade[0], 460);
				}, 0);
				break;
			case 'PayPalSettings':
				html += ['<li><p class="miniselect">' 
								   + loc["Валюта платежа"] + '<select name="PayPal-curr-input" id="PayPal-curr-input"><option value="USD" title="$" selected="">USD</option><option value="AUD" title="$">AUD</option><option value="GBP" title="£">GBP</option><option value="BRL" title="R$">BRL</option><option value="HUF" title="">HUF</option><option value="HKD" title="$">HKD</option><option value="DKK" title="">DKK</option><option value="EUR" title="€">EUR</option><option value="ILS" title="₪">ILS</option><option value="CAD" title="$">CAD</option><option value="MXN" title="$">MXN</option><option value="NZD" title="$">NZD</option><option value="TWD" title="NT$">TWD</option><option value="NOK" title="">NOK</option><option value="PLN" title="">PLN</option><option value="RUB" title="">RUB</option><option value="SGD" title="$">SGD</option><option value="THB" title="฿">THB</option><option value="PHP" title="P">PHP</option><option value="CZK" title="">CZK</option><option value="SEK" title="">SEK</option><option value="CHF" title="">CHF</option><option value="JPY" title="¥">JPY</option></select></p></li>'
						,'<li><p>' + loc["E-mail получателя платежа"] + '</p><input type="text" name="PayPal-mail-input" id="PayPal-mail-input" placeholder="mail@ucalc.pro" value="[PayPalMail]"></li>'
						,'<li><p>' + loc["Назначение платежа"] + '</p><input type="text" name="PayPal-subject-input" id="PayPal-subject-input" value="[PayPalSubject]"></li>']
						.join('');
				break;
			case 'yaCassaSettings':
				html += ['<li><ol class="tooltip-payment-list">' + loc["<li>Заполните заявку на подключение и создайте личный кабинет на сайте <a href=\"https://kassa.yandex.ru/\" target=\"_blank\">Яндекс.Кассы</a>.</li><li>В личном кабинете заполните анкету и загрузите сканы паспорта индивидуального предпринимателя или генерального директора компании.</li><li>Укажите способ подключения Вашего интернет-магазина.</li>"] + '</ol></li>'
						,'<li><p>Shop ID</p><input type="text" name="yaCassa-shopid-input" id="yaCassa-shopid-input" placeholder="000000" value="[yaCassaShopId]"></li>'
						,'<li><p>Sc ID</p><input type="text" name="yaCassa-scid-input" id="yaCassa-scid-input" placeholder="111-111" value="[yaCassaScId]"></li>']
						.join('');
				
				var fade = $('.settings--active .tooltip-fade');
				fade.css('max-height', fade.css('height'));
				setTimeout(function() {
					fade.css('max-height', '')
						.css('height', fade.css('height'));
					SETTINGS.checkScrollbar(fade[0], 482);
				}, 0);
				break;
			case 'yaMoneySettings':
				html += ['<li>' + loc["Номер кошелька вы можете узнать в настройках аккаунта на сайте <a href=\"https://money.yandex.ru/settings\" target=\"_blank\">Яндекс.Денег</a>."] + '</li>'
						,'<li><p>' + loc["Номер кошелька Яндекс.Денег"] + '</p><input type="text" name="yaMoney-id-input" id="yaMoney-id-input" placeholder="100001000010000" value="[yaMoneyId]"></li>'
						,'<li><p>' + loc["Назначение платежа"] + '</p><input type="text" name="yaMoney-subject-input" id="yaMoney-subject-input" value="[yaMoneySubject]"></li>']
						.join('');
				break;
			case 'amount':
				html += '<li><p>' + loc["Выберите результат, который будет источником суммы к оплате"] + '</p>';
				if (SAVER.json.results.length) {
					html += '<ul class="tooltip-result-list" id="amount-select">';
					for (var i in SAVER.json.results) 
						if (SAVER.json.results.hasOwnProperty(i)) 
							html += '<li class="[class]" data-value="[value]">[text]</li>'
								.Signe({
									class: (params.data.amount == SAVER.json.results[i].id ? 'selected': ''),
									value: SAVER.json.results[i].id,
									text: SAVER.json.results[i].name_text
								});
					html += '</ul>';
				} else {
					html += '<p style="color:gray;">' + loc["Значения отсутствуют"] + '</p>';
				}
				html += '</li>';
				break;
			case 'colors':
				html += ['<li><h5>' + loc["Текст"] + '</h5><button class="color-circle" data-color-picker="textColor" style="padding:0;background-color:[textColor];" title="' + loc["Изменить цвет"] + '"></button></li>'
						,'<li><h5>' + loc["Текст при наведении"] + '</h5><button class="color-circle" data-color-picker="textColorHover" style="padding:0;background-color:[textColorHover];" title="' + loc["Изменить цвет"] + '"></button></li>'
						,'<li><h5>' + loc["Рамка"] + '</h5><button class="color-circle" data-color-picker="borderColor" style="padding:0;background-color:[borderColor];" title="' + loc["Изменить цвет"] + '"></button></li>'
						,'<li><h5>' + loc["Фон"] + '</h5><button class="color-circle" data-color-picker="backgroundColor" style="padding:0;background-color:[backgroundColor];" title="' + loc["Изменить цвет"] + '"></button></li>'
						,'<li><h5>' + loc["Фон при наведении"] + '</h5><button class="color-circle" data-color-picker="backgroundColorHover" style="padding:0;background-color:[backgroundColorHover]" title="' + loc["Изменить цвет"] + '"></button></li>']
						.join('');
				break;
			case 'sizes':
				html += ['<li>'
							,'<div class="align-switcher">'
								,'<div class="align-switcher-item align-switcher-item__justify">'
									,'<input type="radio" name="alignswitcher" id="aligning-1" value="justify" ' + (params.data.align == 'justify' ? 'checked': '') + ' onchange="SETTINGS.changeAlign(this,[id]);">'
									,'<label for="aligning-1"></label>'
								,'</div>'
								,'<div class="align-switcher-item align-switcher-item__left">'
									,'<input type="radio" name="alignswitcher" id="aligning-2" value="left" ' + (params.data.align == 'left' ? 'checked': '') + ' onchange="SETTINGS.changeAlign(this,[id]);">'
									,'<label for="aligning-2"></label>'
								,'</div>'
								,'<div class="align-switcher-item align-switcher-item__center">'
									,'<input type="radio" name="alignswitcher" id="aligning-3" value="center" ' + (params.data.align == 'center' ? 'checked': '') + ' onchange="SETTINGS.changeAlign(this,[id]);">'
									,'<label for="aligning-3"></label>'
								,'</div>'
								,'<div class="align-switcher-item align-switcher-item__right">'
									,'<input type="radio" name="alignswitcher" id="aligning-4" value="right" ' + (params.data.align == 'right' ? 'checked': '') + ' onchange="SETTINGS.changeAlign(this,[id]);">'
									,'<label for="aligning-4"></label>'
								,'</div>'
							,'</div>'
						,'</li>']
						.join('');
				html += SETTINGS.sliderBuildTpl(loc["Размер надписи"], 'fontSize', 2, 10, 50, 1);
				html += SETTINGS.sliderBuildTpl(loc["Радиус углов"], 'borderRadius', 2, 0, 50, 1);
				html += SETTINGS.sliderBuildTpl(loc["Отступ сверху"], 'paddingTop', 2, 0, 50, 1);
				html += SETTINGS.sliderBuildTpl(loc["Отступ снизу"], 'paddingBottom', 2, 0, 50, 1);
				break;

			/** MAPS */
			case 'mapSettings':
				html += '<li class="tooltip-units__link" data-action="mapInclude"><h5>' + loc["Содержимое"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapType"><h5>' + loc["Карта"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapPoints"><h5>' + loc["Мультимаршрут"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapLimits"><h5>' + loc["Ограничения"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapUnit"><h5>' + loc["Единица измерения"] + '</h5></li>'
					 ;
				break;

			case 'mapInclude':
				html += SETTINGS.checkItemTpl(loc["Откуда"], 		"fromSwitcher", 	"block", params);
				html += SETTINGS.checkItemTpl(loc["Куда"], 			"toSwitcher", 		"block", params);
				html += SETTINGS.checkItemTpl(loc["Карта"], 		"mapSwitcher", 		"block", params);
				html += SETTINGS.checkItemTpl(loc["Местоположение"],"placeSwitcher", 	"block", params);
				break;

			case 'mapType':
				html += SETTINGS.changeAttrFieldTpl(loc["Яндекс.Карты"], "typeChange", "yandex_maps");
				html += SETTINGS.changeAttrFieldTpl(loc["Google Maps"], "typeChange", "google_maps");
				html += SETTINGS.changeAttrFieldTpl(loc["Bing Maps"], "typeChange", "bing_maps");
				break;

			case 'mapPoints':
				html += SETTINGS.sliderBuildTpl(loc["Макс. количество"], 'maxPoints', 2, 2, 15, 1);
				break;

			case 'mapLimits':
				html += '<li class="tooltip-units__link" data-action="mapLimCity"><h5>' + loc["Доступные города"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapLimCountry"><h5>' + loc["Доступные страны"] + '</h5></li>'
					 +  '<li class="tooltip-units__link" data-action="mapLimDistance"><h5>' + loc["Доступные расстояния"] + '</h5></li>'
					 ;
				break;

			case 'mapLimDistance':
				html += ['<li>'
							,'<div class="overflow from-input">'
								,'<div class="pull-left">' + loc["Минимальное расстояние"] + '</div>'
								,'<div class="pull-right tooltip-inner__result">'
									,'<input type="text" class="valid-number-drob" maxlength="10" data-prop="minDistance" value="[minDistance]">'
								,'</div>'
							,'</div>'
						,'</li>']
						.join('');
				html += ['<li>'
							,'<div class="overflow from-input">'
								,'<div class="pull-left">' + loc["Минимальное расстояние"] + '</div>'
								,'<div class="pull-right tooltip-inner__result">'
									,'<input type="text" class="valid-number-drob" maxlength="10" data-prop="maxDistance" value="[maxDistance]">'
								,'</div>'
							,'</div>'
						,'</li>']
						.join('');
				break;

			case 'mapUnit':
				html += SETTINGS.changeAttrFieldTpl(loc["Километр"], "unit", "km");
				html += SETTINGS.changeAttrFieldTpl(loc["Миля"], "unit", "ml");
				html += SETTINGS.changeAttrFieldTpl(loc["Метр"], "unit", "m");
				break;

			/** TARGETS */
			case 'targets-main-menu':
				html += ['<li class="tooltip-units__link" data-action="yandexMainMenu" data-service-name="yandex"><h5>' + loc["Цель в Яндекс.Метрике"] + '</h5></li>'
                		,'<li class="tooltip-units__link" data-action="googleMainMenu" data-service-name="google"><h5>' + loc["Цель в Google Analytics"] + '</h5></li>']
                		.join('');
				if (!BILLING.sms)
					html += '<div style="height: 30px"></div><div class="tooltip-msg-bg"><div class="permission-msg">' + loc["Цели доступны только в платном тарифе"] + SERV.tariffBtn + '</div></div>';
				break;


			/** YANDEX */
			case 'targets-yandex-main-menu':
				html += ['<li>'
							,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Цель"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
									,'<input type="checkbox" id="yandex-target-enabled-checkbox" class="js-target-enabled" [isChecked]>'
									,'<label for="yandex-target-enabled-checkbox"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link js-target-settings-button [disabledClass]" data-action="yandexSettingsMenu">'
							,'<h5>' + loc["Настройки"] + '</h5>'
						,'</li>']
						.join('')
						.Signe({
							isChecked: params.data.isChecked ? "checked" : "",
							disabledClass: params.data.isChecked ? "" : "disabled"
						});
				break;

			case 'targets-yandex-settings-menu':
				html += ['<li>'
							,'<div class="list-point_has-margin">'
								,'<p>'+loc["Название"]+'</p>'
								,'<input type="text" value="[targetName]" class="js-target-name"/>'
							,'</div>'
							,'<p>'+loc["Идентификатор (ID)"]+'</p>'
							,'<input type="text" value="[targetUrl]" class="js-target-url"/>'
						,'</li>']
						.join('');
				break;

			case 'targets-yandex-disabled-menu':
				html += ['<li><br>'
							,'<p class="text-center">' + loc["Для работы целей<br>необходимо подключить<br>Яндекс.Метрику"] + '</p>'
							,'<p class="text-center">'
								,'<a class="js-enable-service" href="javascript://" style="font-size: 16px;">' + loc["Подключить"] + '</a><br>'
								,'<a class="js-no-acc-link" href="javascript://" style="font-size: 12px;">' + loc["Нет аккаунта"] + '</a>'
							,'</p><br>'
						,'</li>']
						.join('');
				break;


			/** GOOGLE */
			case 'targets-google-main-menu':
				html += ['<li>'
                			,'<div class="textswitcher">'
								,'<div class="pull-left">' + loc["Цель"] + '</div>'
								,'<div class="pull-right textswitcher-item">'
								,'<input type="checkbox" id="google-target-enabled-checkbox" class="js-target-enabled" [isChecked]>'
									,'<label for="google-target-enabled-checkbox"></label>'
								,'</div>'
							,'</div>'
						,'</li>'
						,'<li class="tooltip-units__link js-target-settings-button [disabledClass]" data-action="googleSettingsMenu">'
							,'<h5>' + loc["Настройки"] + '</h5>'
						,'</li>']
						.join('')
						.Signe({
							isChecked: params.data.isChecked ? "checked" : "",
							disabledClass: params.data.isChecked ? "" : "disabled"
						})
				break;

			case 'targets-google-settings-menu':
				html += ['<li>'
							,'<div class="list-point_has-margin">'
							,'<p>' + loc["Название"] + '</p>'
								,'<input type="text" value="[targetName]" class="js-target-name"/>'
							,'</div>'
							,'<p>' + loc["Идентификатор (ID)"] + '</p>'
							,'<input type="text" value="[targetUrl]" class="js-target-url"/>'
						,'</li>']
						.join('');
				break;

			case 'targets-google-disabled-menu':
				html += ['<li><br>'
							,'<p class="text-center">' + loc["Для работы целей<br>необходимо подключить<br>Google Analytics"] + '</p>'
							,'<p class="text-center">'
								,'<a class="js-enable-service" href="javascript://" style="font-size: 16px;">' + loc["Подключить"] + '</a><br>'
								,'<a class="js-no-acc-link" href="javascript://" style="font-size: 12px;">' + loc["Нет аккаунта"] + '</a>'
							,'</p><br>'
						,'</li>']
						.join('')
				break;
			/** TARGETS END */

		}
		/* <!--/BUTTON--> */

		if (params.listitems)
			html += '</ol>';
		else
			html += '</ul>';

		if (params.hasOwnProperty("data"))
			return html.Signe(params.data).Signe(params);
		else
			return html.Signe(params);

	},

	timeoutArrow: {}, // таймер появления доп стрелки
	timeoutBlock: 0, // заретить выполнение таймера
	setPosition: function(parent, change) {
		var offset = parent.offset().top,
			scrolltop = $(document).scrollTop(),
			winheight = $(window).height(),
			toolheight = parent.find('.tooltip').height();

		clearTimeout(SETTINGS.timeoutArrow);

		if (change == 'change') { //если тултип ранее был открыт, сейчас открыт сосендний, поверить, упираеся ли он в верх страницы
			if (offset - toolheight - 10 < 0) { // значит тултип не помещается
				parent.find('.tooltip').removeClass('tooltip-up').addClass('tooltip-down');
				SETTINGS.timeoutArrow = setTimeout(function() {
					if (   SETTINGS.timeoutBlock
						|| parent.closest('.settings--active').length === 0)
						return;
					parent.removeClass('settings-up').addClass('settings-down');
					parent.addClass('arrow-transition');
				}, 300);
				SETTINGS.helperPostion(parent, 'top');
			}
		}
		else {
			if (   offset - scrolltop + 16 > winheight / 2 // тултип в верхней половине окна
				&& offset - scrolltop - 16 > toolheight) {
				parent.find('.tooltip').removeClass('tooltip-down').addClass('tooltip-up');
				SETTINGS.timeoutArrow = setTimeout(function() {
					if (SETTINGS.timeoutBlock)
						return;
					parent.removeClass('settings-down').addClass('settings-up');
					parent.addClass('arrow-transition');
				}, 300);
				SETTINGS.helperPostion(parent, 'bottom');
			}
			else {
				parent.find('.tooltip').removeClass('tooltip-up').addClass('tooltip-down');
				SETTINGS.timeoutArrow = setTimeout(function() {
					if (SETTINGS.timeoutBlock)
						return;
					parent.removeClass('settings-up').addClass('settings-down');
					parent.addClass('arrow-transition');
				}, 300);
				SETTINGS.helperPostion(parent, 'top');
			}

			if (winheight - offset + 32 < toolheight)
				$('body').css('padding-bottom', offset + 32 + toolheight - winheight);
		}

		$(window).on('scroll.tooltip', function () {
			var offset = parent.offset().top,
				scrolltop = $(document).scrollTop();
			if (   offset - scrolltop < 120
				&& $(".settings--active").length
				&& $(".settings--active .tooltip").length
				&& !DnDtooltip.paused) {

				var bool = false;
				$(".settings--active .tooltip").each(function() {
					if ($(this).is(":hover"))
						bool = true;
				});
				if (bool) {
					$('.settings-toplinks__li-link--active').click();
					$(window).off('scroll.tooltip');
				}
			}
		});
	},

	helperPostion: function(parent, pos) {
		parent.find('.settings-toplinks__li-link').each(function() {
			var $this = $(this);

			if (typeof pos != 'undefined')
				$this.attr('data-ub-pos', pos);

			setTimeout(function() {
				if ($this.is('.settings-toplinks__li-link--active'))
					$this.attr('data-ub-disable', 'disable');
				else
					$this.attr('data-ub-disable', '');
			}, 100);
			setTimeout(function() {
				if ($this.is('.settings-toplinks__li-link--active'))
					$this.attr('data-ub-disable', 'disable');
				else
					$this.attr('data-ub-disable', '');
			}, 500);
		});
	},

	bodyPaddingBottom: function(fade) {
		var doc = $(document).height(),
			tool = fade.offset().top + fade.height();
		if (tool - doc > 0) {
			$('.maincontent').animate({
				'padding-bottom': (288 + tool - doc + 50) + 'px'
			}, 300);
		}
	},

	tooltipShow: function(parent) {
		setTimeout(function() {
			parent.find('.tooltip').addClass('tooltip-notranslate');
		}, 20);
	},

	checkRadio: function(element, id, prop) {
		var field = SAVER.getFieldBy('id', id);
		prop  = field[prop];
		$(element).closest('.settings').find('.tooltip .tooltip-radio__item input[value='+prop+']').attr('checked','checked');
	},
	checkType: function(element, id) {
		var field = SAVER.getFieldBy('id', id);
		type  = field.typeChange;
		$(element).closest('.settings').find('.tooltip .tooltip-radio__item input[value='+type+']').attr('checked','checked');
	},
	checkPayment: function(element, id) {
		var field = SAVER.getFieldBy('id', id);
		type  = field.payment;
		var radio = $(element).closest('.settings').find('.tooltip .tooltip-radio__item input[value='+type+']');
		radio.attr('checked','checked');

		SETTINGS.changePayment(type, id);
	},

	closeTooltip: function (event, parent, el) { // закрывашка настроек

		// получаем индекс активной кнопки, чтобы выключть ее
		var btns = el.parent().find('.settings-toplinks__li');
		var btnLength = btns.length;
		var btnIndex = btnLength - btns.index(el);

		SETTINGS.timeoutBlock = 1;
		clearTimeout(SETTINGS.timeoutArrow);
		setTimeout(function() {
			SETTINGS.timeoutBlock = 0;
		}, 600);

		if (   $('.calc-settings.settings--active').length
			&& !$(event.target).closest('.calc-settings .settings-toplinks').length)
			parent = $('.calc-settings .settings-toplinks');

		parent
			.removeClass('arrow-transition')
			.addClass('tooltip-opacity-0');
		el.css('z-index', '');

		setTimeout(function(){
			el
				.closest('[data-toplink='+btnIndex+']')
				.removeAttr('data-toplink');
			el
				.removeClass('settings-toplinks__li-link--active')
				.closest('[data-id]')
				.removeClass('settings--active');
			parent
				.removeAttr('data-toplink')
				.removeClass('settings-up settings-down arrow-transition tooltip-opacity-0')
				.find('.tooltip').remove();
			SAVER.history.newStep();
			$('body').css('padding-bottom', '')
				.unbind('mouseup',SETTINGS.runCloseTooltip); //снимаем обработчик
		}, 300);

		SETTINGS.helperPostion(parent, 'top');
		SETTINGS.calc.memo = 0;

		$('.maincontent').stop().animate({
			'padding-bottom': '288px'
		}, 300);

		$('body').off('keyup.mask');

	},
	runCloseTooltip: function(event){	// это нужно для клика вне блока настроек
		if (!event)
			var event = {target: $('body')};

		var div = $('.settings-toplinks');
		var clickedElement = $(event.target || 'body');

		if (clickedElement.closest(".search-list").length)
			return
		else if (clickedElement.closest(".js-custom-popup-wpapper").length) {
			$('.settings-toplinks__li-link--active').removeClass('settings-toplinks__li-link--active');
			return;
		}

		if (   !div.is(event.target)
			&& div.has(event.target).length === 0
			&& !SETTINGS.mousedown_in_tooltip) {

			SETTINGS.closeTooltip.call(null, event, $('.settings-toplinks[data-toplink]'), $('.settings-toplinks__li-link--active'));
		}
		else if ($('.calc-settings.settings--active').length
			&& !div.is(event.target)
			&& $('.calc-settings').has(event.target).length === 0
			&& !SETTINGS.mousedown_in_tooltip) {

			SETTINGS.closeTooltip.call(null, event, $('.settings-toplinks[data-toplink]'), $('.settings-toplinks__li-link--active'));
		}
	},

	checkScrollbar: function(element, height) {
		var tooltip = $(element).closest('.settings-toplinks').find('.tooltip'),
			h = typeof height != 'undefined' ? height : 300;

		if (   tooltip.closest('[data-id]').attr('data-type') == 'button'
			|| (tooltip.find('li').length > 4
			|| tooltip.height() > h)
			&& !tooltip.find('.scrollbar-inner').length) {

			SETTINGS.scrollWrap(tooltip);
			tooltip.stop().animate({
				'height': h+'px'
			}, 300);
			tooltip.find('.scrollbar-inner').stop().css({
				'height': tooltip.find('.scrollbar-inner').height()+'px',
				'max-height': tooltip.find('.scrollbar-inner').height()+'px'
			}).animate({
				'height': h+'px',
				'max-height': h+'px'
			}, 300);
		} 
		else if (tooltip.find('li').length > 3 && tooltip.find('.scrollbar-inner').length ) {

			tooltip.add(tooltip.find('.scroll-content')).stop().animate({
				'height': '300px'
			}, 300);
			SETTINGS.scrollWrap(tooltip);
		}

		$('.tooltip-fade').css({
			'height': '',
			'max-height': ''
		});
	},
	scrollDown: function() {
		var scTop = $('.tooltip .tooltip-fade').height();
		if ($('.tooltip .scroll-wrapper > div').scrollTop() < scTop) {
			$('.tooltip .scroll-wrapper > div').animate({
				scrollTop: scTop
			}, 400);
		}
	},
	checkLimitEmailAdmin: function(field, tooltip) {
		var adminEmailLength = tooltip.find('.fade-list').length;
		var btn = tooltip.find('.list-add');

		if (!BILLING.adminEmail && adminEmailLength >= 1)
			btn.addClass('js-show-msg-arrow');
		else
			btn.removeClass('js-show-msg-arrow');

		// выключаем нижние адреса
		if (!BILLING.adminEmail) {
			$('.fade-list:first')
				.removeClass('opacity06')
				.find('input')
				.removeAttr('disabled');
			$('.fade-list + .fade-list')
				.addClass('opacity06')
				.find('input')
				.attr('disabled', 'true');
		}
	},
	checkLimitTelAdmin: function(field, tooltip) {
		var btn = tooltip.find('.list-add');
		if (!BILLING.sms)
			btn.addClass('js-show-msg-arrow');
	},
	// ->>>

	scrollWrap: function(tooltip) {
		if (!tooltip.find('.scrollbar-inner').length) {
			tooltip.wrapInner("<div class='scrollbar-inner'></div>");
			tooltip.find('.scrollbar-inner').scrollbar();
			tooltip.find('.scroll-wrapper').css({
				'height': tooltip.height() + 'px'
			});
		}
	},

	// <<<-
	scrollUnwrap: function() {
		if ($('.settings--active').find('.scrollbar-inner').length) {
		    $('.settings--active').find('.scrollbar-inner').scrollbar('destroy');
		}
		$('.settings--active').find('.tooltip').css('height', '');
	},

	diapasinItemTpl: function(title, min, max) {

	},

	checkItemTpl: function(title, attr, yes, params) {
		var checked = params[attr] === yes ? 'checked="checked"': '';
		console.log(title, attr, yes, params);
		return ('<li>'
					+ '<div class="textswitcher">'
						+ '<div class="pull-left">' + title + '</div>'
						+ '<div class="pull-right textswitcher-item">'
							+ '<input type="checkbox" id="'+attr+'-[type]-[id]" onchange="SETTINGS.checkItem(this,[id],\''+attr+'\')" '+checked+'>'
							+ '<label for="'+attr+'-[type]-[id]"></label>'
						+ '</div>'
					+ '</div>'
				+ '</li>')
	},

	checkItem: function (checkbox, id, checkname) { // включает / выключает название и описание ( и цифры диапазона у слайдера )

		var checkboxId = $(checkbox).attr('id'),
			checked    = $(checkbox).is(":checked");
			item       = $('[data-change="'+checkboxId+'"]'),
			field	   = SAVER.getFieldBy('id', id);

		checked ? item.slideDown('normal'): item.slideUp('normal');

		if (
			   checkname == 'titleSwitcher'
			|| checkname == 'descSwitcher'
			|| checkname == 'toSwitcher'
			|| checkname == 'fromSwitcher'
			|| checkname == 'mapSwitcher'
			|| checkname == 'placeSwitcher'
		) {
			field[checkname] = checked ? 'block': 'none';
		} 
		else if (checkname == 'rangeSwitcher') {
			field.rangeSwitcher = checked ? 'inline': 'none';
			if ($(checkbox).is(":checked")) {
				$('[data-id="'+id+'"] .slider-line__num:not(.slider-line__num-min):not(.slider-line__num-max)').css({
					'display': 'inline',
					'opacity': 0
				}).animate({
					'opacity': 1
				}, 300);
			}
			else {
				$('[data-id="'+id+'"] .slider-line__num:not(.slider-line__num-min):not(.slider-line__num-max)').animate({
					'opacity': 0
				}, 300, function() {
					$(this).hide();
				});
			}
		}

		if (
			   checkname == 'toSwitcher'
			|| checkname == 'fromSwitcher'
		) {
			FIELDS.map.updateWay(field);
		} 
	},

	checkImportantTpl: function(title, attr, yes, params) {
		var checked = params[attr] === yes ? 'checked="checked"': '';
		return ('<li>'
					+ '<div class="textswitcher">'
						+ '<div class="pull-left">' + title + '</div>'
						+ '<div class="pull-right textswitcher-item">'
							+ '<input type="checkbox" id="title-[type]-[id]" onchange="SETTINGS.checkImportant(this,[id],\''+attr+'\')" '+checked+'>'
							+ '<label for="title-[type]-[id]"></label>'
						+ '</div>'
					+ '</div>'
				+ '</li>')
	},

	checkImportant: function (checkbox, id, checkname) { // включает / выключает название и описание ( и цифры диапазона у слайдера )

		var checkboxId = $(checkbox).attr('id'),
			item       = $('[data-change="'+checkboxId+'"]'),
			field	   = SAVER.getFieldBy('id', id);

		field.importantSwitcher  = $(checkbox).is(":checked") ? '*': '';
		$('#[type]-[id]'.Signe(field)).parent().attr('data-important', field.importantSwitcher);


		var tooltipHolder = $(".js-tooltip-holder-for-" + field.type + "-" + field.id);

		if(!tooltipHolder.length)
			return;

		if(field.type === "input_text") {
			FIELDS.input_text.checkImportantSuffix(field, tooltipHolder[0]);
		}
		
		$('#[type]-[id]'.Signe(field)).attr('placeholder', field.tooltip + ' ' + field.importantSwitcher);
	},

	sliderBuildTpl: function(title, attr, length, min, max, step) {
		return ('<li class="tooltip-slider">'
				 + '<div class="overflow">'
					 + '<span class="pull-left">' + title + '</span>'
					 + '<div class="pull-right tooltip-inner__result js-tooltip-slider-result">'
						 + '<input type="text" class="valid-number" maxlength="'+length+'" value="['+attr+']">'
					 + '</div>'
				 + '</div>'
				 + '<div class="tooltip-slider-range" data-field-attr="'+attr+'" data-min="'+min+'" data-max="'+max+'" data-step="'+step+'" data-value="['+attr+']"></div>'
			 + '</li>');
	},

	sliderBuild: function(element, id) { // строим слайдеры отступов
		var field = SAVER.getFieldBy('id', id);
		$(element).closest('.settings-toplinks').find('.tooltip-slider-range:not(.ui-slider)').each(function(){
			var slider  	= $(this),
				input 		= slider.closest('.tooltip-slider').find('.js-tooltip-slider-result input'),
				minimum 	= +slider.attr('data-min'),
				maximum 	= +slider.attr('data-max'),
				step    	= +slider.attr('data-step'),
				fieldAttr 	= slider.attr('data-field-attr'),
				value 		= field[fieldAttr];

			input.val(value); // меняем циферку
			slider.slider({
				min: minimum,
				max: maximum,
				value: value,
				step: step
			});
			slider.on('slide', function( event, ui ) {
				field[fieldAttr] = ui.value; // сейвим в SAVER.json
				slider.closest('.tooltip-slider').find('.js-tooltip-slider-result input').val(ui.value);	// меняем циферку при перетягивании
				
				switch (fieldAttr) {
					case 'paddingTop':
						slider.closest('[data-id]').css('padding-top',ui.value+'px');	// меняем паддинг у филда
						break;
					case 'paddingBottom':
						slider.closest('[data-id]').css('padding-bottom',ui.value+'px');	// меняем паддинг у филда
						break;
					case 'fontSize':
						slider.closest('[data-id]').find('.' + field.type + '-' + field.id).css('font-size', ui.value+'px'); // меняем размер шрифта
						break;
					case 'borderRadius':
						slider.closest('[data-id]').find('.' + field.type + '-' + field.id).css('border-radius', ui.value+'px'); // меняем радиус бордера
						break;
					case 'maxPoints':
						FIELDS.map.updateWay(field);
						break;
					case 'height':
						FIELDS.map.setHeight(field, ui.value);
						break;
				}
				RANDER.setStyleFromField(field);
			});
			input.on('input.slider', function() {
				var old_val = input.val();
				var val = old_val > maximum 
						? maximum
						: old_val < minimum 
						? minimum
						: old_val;
				slider.slider("value", val);
				slider.trigger('slide', [{value: val}]);
				if (old_val > maximum)
					input.val(val);
				else
					input.val(old_val);
			});
			input.on('blur.slider', function() {
				var old_val = input.val();
				if (old_val == "" )
					input.val(0);
				else if (old_val < minimum)
					input.val(minimum);
			});
		});
	},
	stepBuild: function(element, id) { // строим слайдеры шага
		var field = SAVER.getFieldBy('id', id);
		var toplinks = $(element).closest('.settings-toplinks');
		toplinks.find('.js-tooltip-slider-step').each(function(){
			var input  = $(this),
				parent = input.closest('[data-id]'),
				slider = $('#slider-' + field.id),
				minimum = field.min,
				maximum = field.max;

			input.on('input.slider', function() {
				var slider = $('#[type]-[id]'.Signe(field)),
					origin = input.val(),
					val = origin > maximum ? maximum : origin;
				if (origin == '0' || origin == '0.' || origin == '0.0')
					input.val(origin);
				else if (origin != "")
					input.val(val);
				val /= 1;
				field.step = val;
				slider.after('<div id="[type]-[id]"></div>'.Signe(field));
				slider.remove(); // сносим старый слайдер
				FIELDS.slider.initial(field); // инициалиируем заново
			});
			input.on('blur', function() {
				if (input.val() <= 0)
					input.val(1).trigger('input');
			});
		});

		toplinks.find('.js-tooltip-slider-min').each(function(){
			var input  = $(this),
				parent = input.closest('[data-id]'),
				id 	   = parent.attr('data-id'),
				field  = SAVER.getFieldBy('id', id), 
				settings = parent.find('.js-data-min input');
			input.on('input', function() {
				var val = input.val();
				if (val >= field.max)
					val = field.max - field.step;
				settings.val(val).trigger('change');
			});
			input.on('blur', function() {
				if (input.val() == "")
					input
						.val(FIELDS.slider.signe.min)
						.trigger('input');
			});
		});
		toplinks.find('.js-tooltip-slider-max').each(function(){
			var input  = $(this),
				parent = input.closest('[data-id]'),
				id 	   = parent.attr('data-id'),
				field  = SAVER.getFieldBy('id', id), 
				settings    = parent.find('.js-data-max input');
			input.on('input', function() {
				var val = input.val();
				if (val <= field.min)
					val = field.min + field.step;
				settings.val(input.val()).trigger('change');
			});
			input.on('blur', function() {
				if (input.val() == "")
					input
						.val(FIELDS.slider.signe.max)
						.trigger('input');
			});
		});
	},
	changePadding: function (radio,id) { // меняет отступы слева и справа (или 0 или 24)

		var radio = $(radio);
		radio.closest('[data-id]').css({
			'padding-left': +radio.val(),
			'padding-right': +radio.val()
		});
		SAVER.getFieldBy('id', id).paddingLR = +radio.val();
		$('[data-id="'+id+'"]').removeClass('padding-lr-0 padding-lr-24').addClass('padding-lr-' + radio.val());

	},
	changeInput: function (radioInput,id) {	// проверяем выбранный в настройках тип поля

		var newValue = typeof radioInput == 'string' ? radioInput: $(radioInput).val(),
			field 	 = SAVER.getFieldBy('id', id),
			field_obj = $('[data-id="'+id+'"] .js-field-input');

		var needToSetDefault = true;

		if(field.type === "input_text" && field.typeChange === "tel") {
			var codes = [];
			$(FIELDS.input_text.availableCountries).each(function() {
				codes.push(this.countryCode);
			});
			if (codes.indexOf(field.value) >= 0)
				field.value = "";
			needToSetDefault =
				   /** Если установлен дефолтный тултип любого типа поля */
				   FIELDS[field.type].standart_opt.indexOf(field.tooltip) >= 0
				   /** Или установлен дефолтный код любой страны */
				|| FIELDS[field.type].findCountryByPhoneCodeStrict(field.tooltip) !== null;
		} else {
			needToSetDefault = FIELDS[field.type].standart_opt.indexOf(field.tooltip) >= 0;
		}
		// console.log("Нужно сменить на дефолтный", needToSetDefault)

		if (needToSetDefault) { // если установлено стандартное значение
			if (newValue == 'number')
				field.tooltip = loc["Введите число"];
			else if (newValue == 'text')
				field.tooltip = loc["Введите текст"];
			else if (newValue == 'textarea')
				field.tooltip = loc["Введите текст"];
			else if (newValue == 'tel')
				field.tooltip = FIELDS.input_text.DEFAULT_PHONE_PLACEHOLDER;
			else if (newValue == 'date')
				field.tooltip = loc["дд.мм.гггг"];
			else if (newValue == 'time')
				field.tooltip = '--:--'
			else if (newValue == 'email')
				field.tooltip = 'mail@ucalc.pro';
		}

		field.typeChange = newValue;
		FIELDS.input_text.changeType(field);
		CALCULATOR.validAll();

		if (newValue != 'number')
			$('[data-id="'+id+'"] .block-input').addClass('block-input-undefined');
		else
			$('[data-id="'+id+'"] .block-input').removeClass('block-input-undefined');

	},

	changePayment: function (radioInput,id) {	// проверяем выбранный в настройках способ оплаты

		var newValue = typeof radioInput == 'string' ? radioInput: $(radioInput).val(),
			field 	 = SAVER.getFieldBy('id', id);

		field.payment = newValue;

		$('.tooltip-units__settings').attr('data-action', newValue + 'Settings');

		if (newValue == 'none')
			$('.tooltip-units__link').addClass('disabled');
		else
			$('.tooltip-units__link').removeClass('disabled');
	},

	changeAttrFieldTpl: function(title, attr, value) {
		var rnd = DAT.getRandomInt(0, 99999);
		var at = function(str1, str2) {
			return str1+'="'+str2+'" ';
		};
		return ('<li class="tooltip-radio__item">'
					+ '<input '
						+at( 'type'		, 'radio' 													)
						+at( 'name'		,  attr+'[type]-[id]' 										)
						+at( 'onchange'	, 'SETTINGS.changeAttrField(this,[id],\''+attr+'\')' 		)
						+at( 'id'		, 'tooltip-radio'+rnd+'__[type]-[id]' 						)
						+at( 'value'	,  value 													)
						+'>'
					+ '<label for="tooltip-radio' + rnd + '__[type]-[id]">' + title + '</label>'
				+ '</li>');						
	},
	changeAttrField: function (radioInput,id,attr) {	// проверяем выбранный в настройках тип карты

		var newValue = typeof radioInput == 'string' ? radioInput: $(radioInput).val(),
			field 	 = SAVER.getFieldBy('id', id);

		field[attr] = newValue;

		/** если меняем единицу измерения, нужно пересчитать растояние */
		if (attr == 'unit') {
			RECALC.varUpdate(DAT.varName(field.id_var), FIELDS.map.getValue(field));
			FIELDS.map.actualToggleFormula(field);
		}

		/** Если меняем тип карты, нужно ее перезагрузить */
		if (attr == 'typeChange' && field.type == 'map') {
			var map = $('#[type]-[id] .map-init'.Signe(field));
			map.html(''); // сносим старый слайдер
			window['initMap_'+field.typeChange](field); // инициалиируем заново
		}
	},

	tmplTooltipOpt: {
		selector: '<li>'
					+	'<div class="list-point">'
					+		'<input type="text" class="input-field input-field-option list-point__name" data-source="other" value="[title]" oninput="FIELDS.[type].inputChangeSettings(this,[id])" data-option="[i]">'
					+		'<a class="list-point__remove" href="javascript://" onclick="FIELDS.[type].designRemove(this,[id])"></a>'
					+	'</div>'
					+	'<div class="drag-li cursor-grab"></div>'
					+'</li>',
		input_radio: '<li>'
					+	'<div class="list-point">'
					+		'<input type="text" class="input-field input-field-option list-point__name" data-source="other" value="[title_text]" oninput="FIELDS.[type].inputChangeSettings(this,[id])" data-option="[i]">'
					+		'<a class="list-point__remove" href="javascript://" onclick="FIELDS.[type].designRemove(this,[id])"></a>'
					+	'</div>'
					+	'<div class="drag-li cursor-grab"></div>'
					+'</li>',
		input_checkbox: '<li>'
					+	'<div class="list-point">'
					+		'<input type="text" class="input-field input-field-option list-point__name" data-source="other" value="[title_text]" oninput="FIELDS.[type].inputChangeSettings(this,[id])" data-option="[i]">'
					+		'<a class="list-point__remove" href="javascript://" onclick="FIELDS.[type].designRemove(this,[id])"></a>'
					+	'</div>'
					+	'<div class="drag-li cursor-grab"></div>'
					+'</li>',
		map: 		'<li>'
					+	'<div class="list-point">'
					+		'<input type="text" class="input-field input-field-option list-point__name typeopt-[typeOpt]" data-source="other" value="[title]" oninput="FIELDS.[type].saveInTooltip()" data-option="[i]" data-typeopt="[typeOpt]">'
					+		'<a class="list-point__remove" href="javascript://" onclick="FIELDS.[type].designRemove(this,[id],\'[typeOpt]\')"></a>'
					+	'</div>'
					+	'<div class="drag-li cursor-grab"></div>'
					+'</li>',
	},

	normalOptNumber: function(field) { // проходт по всем пунктам поля и нумерует их с нуля по возрастанию
		var id = field.id,
			attr,
			$parent = $('[data-id="'+id+'"]'),
			$tooltip = $parent.find('.tooltip-fade [data-option]'),
			$design,
			$fomula;
		switch (field.type) {
			case 'selector':
				attr = 'option';
				$design = $parent.find('.options-all [data-option]');
				$formula = $parent.find('.block [data-option]');
				break;
			case 'input_checkbox':
				attr = 'checkbox';
				$design = $parent.find('.field-body [data-checkbox]');
				$formula = $parent.find('.block [data-checkbox]');
				break;
			case 'input_radio':
				attr = 'radio';
				$design = $parent.find('.field-body [data-radio]');
				$formula = $parent.find('.block [data-radio]');
				break;
		}
		$tooltip.each(function(n) {
			$tooltip.eq(n).attr('data-option', n);
			$design.eq(n).attr('data-'+attr, n);
			$formula.eq(n).attr('data-'+attr, n);

			if ($design.eq(n).find('[data-change]').length) {
				$design.eq(n).find('[data-change]').attr('data-change', 'option-[type]-[id]-[n]'.Signe(field).Signe({n: n}));
				$design.eq(n).find('for').attr('for', '[type]-[id]-[n]-des'.Signe(field).Signe({n: n}));
			}
		});
	},

	/**
	 * Открыть окно редактирования кода
	 */
	openCodeEditor: function(field) {
		var $textarea, config, editor,
			maxError = loc["Максимальное количество символов - [num]"].Signe({num: '100 000'}),
			content = ['<textarea id="code_editor">' + field.content + '</textarea>'
					,'<div class="modal_code-nav-btn">'
						,'<span id="modal_locked_text">' + maxError + '</span>'
						,'<button class="btn_prior" id="code_save">'+loc["Сохранить"]+'</button>'
						,'<button class="js-modal-close btn-gray-fill">'+loc["Закрыть"]+'</button>'
					,'</div>']
					.join('');

		SETTINGS.runCloseTooltip();										// закрыть тултипы
		wnd.open(loc["Редактор кода"], 'modal_code_editor', content);	// открыть окно
		$textarea = $("#code_editor");									// найти текстовое поле

		config = {
			mode: "text/html",
			lineNumbers: true,
			indentUnit: 4,
			scrollbarStyle: "simple"
		};
		editor = CodeMirror.fromTextArea($textarea[0], config);

		editor.on("change", function(){
			editor.save();

			var locked = $('.modal_code_editor #modal_locked_text'),
				save = $('.modal_code_editor #code_save');
			if ($textarea.val().length > 100000) {
				locked.css('opacity', 1);
				save.addClass('js-disable');
			}
			else {
				locked.css('opacity', 0);
				save.removeClass('js-disable');
			}
		});

		$('#code_save').click(function() {
			if ($(this).is('.js-disable'))
				return;
			editor.save();
			field.content = $textarea.val();
			SAVER.easeSave(); // аавтосохранение действия
			$('.js-modal-close').click();
		});
	},

	/**
	 * Открыть окно редактирования кода
	 */
	openHtmlEditor: function(field, prop) {
		if (field.acceptHtml == '')
			field.acceptHtml = FIELDS.button.acceptTpl;

		DAT.memoMedium = field.acceptHtml;

		var $textarea, config, editor,
			maxError = loc["Максимальное количество символов - [num]"].Signe({num: '20 000'}),
			content =   ('<div class="modal_accept_editor scrollbar-inner" data-canedit="true" data-source="other" data-change="accept-[type]-[id]">[' + prop + ']</div>'
						+'<div class="modal_code-nav-btn">'
							+'<span id="modal_locked_text">'+maxError+'</span>'
							+'<button class="btn_prior" id="code_save">'+loc["Сохранить"]+'</button>'
							+'<button class="js-modal-close btn-gray-fill">'+loc["Закрыть"]+'</button>'
							+'<button class="button btn-green" id="code_restore" style="float: left">'+loc["Восстановить типовой документ"]+'</button>'
						+'</div>')
						.Signe(field);

		wnd.open(loc["Редактор текста"], 'modal_code_editor', content);	// открыть окно
		$editor = $(".modal_accept_editor");							// найти текстовое поле
		(function(){
            MEDIUM.init();
        })();
        $('.scrollbar-inner').scrollbar();

        $editor.on('input.mediumSettings', function() {
            var locked = $('.modal_code_editor #modal_locked_text'),
            	save = $('.modal_code_editor #code_save');
            if ($editor.text().length > 20000) {
            	locked.css('opacity', 1);
            	save.addClass('js-disable');
            }
            else {
            	locked.css('opacity', 0);
            	save.removeClass('js-disable');
            }
        })

		$('#code_save').click(function() {
			if ($(this).is('.js-disable'))
				return;
			field.acceptHtml = DAT.memoMedium;
			field.acceptStandart = false;
			SAVER.easeSave(); // аавтосохранение действия
			$('.js-modal-close').click();
		});

		$('#code_restore').click(function() {
			var modal_content = '<p>' + loc["Ваши правки будут удалены.<br>Восстановить типовой документ?"] + '</p>'
							  +'<button class="button btn-green" id="restore_yes" style="float: left">'+loc["Да"]+'</button>'
							  +'<button class="js-modal-close btn-gray-fill" id="restore_no">'+loc["Нет"]+'</button>'
							  ;							  
			wnd.open(loc["Восстановить документ"], 'modal_oldssid', modal_content);	// открыть окно
			$('#restore_yes').click(function() {
				var html = FIELDS.button.acceptTpl;
				DAT.memoMedium = html;
				$editor.html(html);
				$('#restore_no').click();
			});
		});
	},

	mousedown_in_tooltip: false, // была ли клавиша зажата в тултипе
	pausedListAdd: 0, // запретить добавлять пункты
	pausedSceckScrollbar: 0 // запретить пересчитывать высоту
	// ->>>
}


// <<<-
var TargetsCommonOperations = {

	Utils: {
		isModifiedTarget: function(targetData) {
			return targetData.targetId !== "";
		},

		refreshTargetData: function(targetData, newTargetDataSource) {
			targetData.targetId = newTargetDataSource.goal_id;
			targetData.targetName = newTargetDataSource.goal_name;
			targetData.targetUrl = newTargetDataSource.goal_url;
		},

		deactivatePopupsNavElement: function(element) {
			element.addClass("disabled");
		},

		activatePopupsNavElement: function(element) {
			element.removeClass("disabled");
		},

		addPreloader: function(tooltipElement) {
			tooltipElement
				.find(".js-tooltip-units-container")
				.prepend(''
					+ '<div class="tooltip-units__overlay js-units-preloader">'
					+ 	'<span class="tooltip-units__loader"></span>'
					+ '</div>'
				);
		},

		removePreloader: function(tooltipElement) {
			tooltipElement.find(".js-units-preloader").remove();
		},
	},


	addTargetEnabledChangeHandler: function(tooltip, field, element, serviceName) {
		var isActiveTargetCheckbox = tooltip.find(".js-target-enabled");
		var targetData = field.targets[serviceName];
		var Utils = TargetsCommonOperations.Utils;
		var targetSettingsButton = tooltip.find(".js-target-settings-button");

		isActiveTargetCheckbox.on("change", function(event) {
			var isTargetActive = isActiveTargetCheckbox.is(":checked");

			if(isTargetActive) {
				if(Utils.isModifiedTarget(targetData)) {
					targetData.isActive = isTargetActive;
					Utils.activatePopupsNavElement(targetSettingsButton);
				} else {
					Utils.addPreloader(tooltip);

					/** Если цель активирована 1 раз, посылаем запрос на ее регистрацию на сервисе */
					$.post(location.pathname, {
						'do': 'stat_target',
						'service': serviceName
					}).done(function(response) {
						// console.log(serviceName, "is active change", response)

						var responseObject = JSON.parse(response);

						/** Service is not activated */
						if("connected" in responseObject && responseObject.connected !== "ok") {
							var statData = window.StatData = window.StatData || {};
							statData[serviceName] = {
								activationLink: responseObject.url
							}

							var linkAction = serviceName + "DisabledMenu";
							$(element).removeClass('settings-toplinks__li-link--active');
							SETTINGS[field.type][linkAction](element, field.id);
							return;
						}

						/** OK status */
						if(responseObject.status) {
							targetData.isActive = isTargetActive;
							Utils.refreshTargetData(targetData, responseObject);
							Utils.activatePopupsNavElement(targetSettingsButton);
						}

						/** Error status */
						if(!responseObject.status) {
							isActiveTargetCheckbox.prop("checked", false);
							targetData.isActive = false;
						}

						Utils.removePreloader(tooltip);
					});
				}
			} else {
				targetData.isActive = isTargetActive;
				Utils.deactivatePopupsNavElement(targetSettingsButton);
			}
		});
	},

	addTargetNameChangeHandler: function(tooltip, field, element, serviceName) {
		var targetNameField = tooltip.find(".js-target-name");
		var targetData = field.targets[serviceName];
		var Utils = TargetsCommonOperations.Utils;

		targetNameField.on("change", function(event) {
			var newTargetName = targetNameField.val();
			
			$.post(location.pathname, {
				'do': 'stat_target',
				'service': serviceName,
				'goal_url': targetData.targetUrl,
				'goal_name': newTargetName,
				'goal_id': targetData.targetId,
			}).done(function(response) {
				// console.log(serviceName, "name change", response)

				var responseObject = JSON.parse(response);

				/** Service is not activated */
				if("connected" in responseObject && responseObject.connected !== "ok") {
					var statData = window.StatData = window.StatData || {};
					statData[serviceName] = {
						activationLink: responseObject.url
					}

					var linkAction = serviceName + "DisabledMenu";
					$(element).removeClass('settings-toplinks__li-link--active');
					SETTINGS[field.type][linkAction](element, field.id);
					return;
				}

				/** OK status */
				if(responseObject.status) {
					Utils.refreshTargetData(targetData, responseObject);
					targetNameField.val(targetData.targetName);
				}

				/** Error status */
				if(!responseObject.status) {
					targetNameField.val(targetData.targetName);
				}
			});
		});
	},

	addTargetUrlChangeHandler: function(tooltip, field, element, serviceName) {
		var targetUrlField = tooltip.find(".js-target-url");
		var targetData = field.targets[serviceName];
		var Utils = TargetsCommonOperations.Utils;

		targetUrlField.on("change", function(event) {
			var newTargetUrl = targetUrlField.val();
			
			$.post(location.pathname, {
				'do': 'stat_target',
				'service': serviceName,
				'goal_url': newTargetUrl,
				'goal_name': targetData.targetName,
				'goal_id': targetData.targetId,
			}).done(function(response) {
				// console.log(serviceName, "url change", response)
				
				var responseObject = JSON.parse(response);

				/** Service is not activated */
				if("connected" in responseObject && responseObject.connected !== "ok") {
					var statData = window.StatData = window.StatData || {};
					statData[serviceName] = {
						activationLink: responseObject.url
					}

					var linkAction = serviceName + "DisabledMenu";
					$(element).removeClass('settings-toplinks__li-link--active');
					SETTINGS[field.type][linkAction](element, field.id);
					return;
				}

				/** OK status */
				if(responseObject.status) {
					Utils.refreshTargetData(targetData, responseObject);
					targetUrlField.val(targetData.targetUrl);
				}

				/** Error status */
				if(!responseObject.status) {
					targetUrlField.val(targetData.targetUrl);
				}
			});
		});
	},

	addActivateServiceLinkClickHandler: function(tooltip, field, element, serviceName) {
		var activateServiceLink = tooltip.find(".js-enable-service");

		activateServiceLink.on("click", function(event) {
			event.preventDefault();

			TargetsCommonOperations.Utils.addPreloader(tooltip);

			if(Statistic && Statistic.PopupManager) {
				Statistic.PopupManager
					.simpleConnection(serviceName)
					.done(function() {
						// console.log("OK", serviceName + "MainMenu")

						$(".settings-toplinks__li-link--active").removeClass("settings-toplinks__li-link--active");
						SETTINGS.button[serviceName + "MainMenu"](element, field.id);
					})
					.fail(function(response) {
						if(response !== Statistic.SharedWindow.Status.notAccount) {
							TargetsCommonOperations.Utils.removePreloader(tooltip);
						}
					});
			}
		});


		var registerAccountLink = "";

		if(serviceName === "google") {
			registerAccountLink = "https://www.google.com/analytics/web/provision#provision/CreateAccount/";
		}

		if(serviceName === "yandex") {
			registerAccountLink = "https://passport.yandex.ru/registration?mode=register";
		}

		tooltip.find(".js-no-acc-link").on("click", function(event) {
			window.open(registerAccountLink);
		});
	}
}
// ->>>
